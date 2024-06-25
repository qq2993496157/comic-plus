import "vue";
import { isFunction } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
let temp = 1;
function getUid() {
  return Date.now() + temp++;
}
function parseFileSize(fileSizeStr) {
  const regex = /^(\d+)\s*([kmgt]?b)$/i;
  const match = fileSizeStr == null ? void 0 : fileSizeStr.match(regex);
  if (!match) {
    throw new Error("Invalid file size format");
  }
  const size = parseFloat(match[1]);
  const unit = match[2].toLowerCase();
  switch (unit) {
    case "b":
      return size;
    case "kb":
      return size * 1024;
    case "mb":
      return size * 1024 * 1024;
    case "gb":
      return size * 1024 * 1024 * 1024;
    case "tb":
      return size * 1024 * 1024 * 1024 * 1024;
    default:
      throw new Error("Invalid file size unit");
  }
}
function setRequestHeaders(xhr, headers) {
  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key]);
  });
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function getError(http, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to post ${http} ${xhr.status}`;
  }
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = "post";
  err.url = http;
  return err;
}
function request(option) {
  if (typeof XMLHttpRequest === "undefined") {
    return;
  }
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  if (option._data) {
    Object.keys(option._data).forEach((key) => {
      formData.append(key, option._data[key]);
    });
  }
  formData.append("file", option.file);
  if (option._headers) {
    setRequestHeaders(xhr, option._headers);
  }
  xhr.withCredentials = option._withCredentials;
  xhr.open("POST", option._http, true);
  if (xhr.upload) {
    xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
        const percentComplete = event.loaded / event.total * 100;
        option.onProgress(Math.ceil(percentComplete));
      }
    };
  }
  xhr.onerror = function error() {
    option.onError(getError(option._http, xhr));
  };
  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option._http, xhr));
    }
    option.onSuccess(getBody(xhr));
  };
  xhr.send(formData);
  return xhr;
}
function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
}
class UploadInstance {
  constructor(options) {
    this._headers = null;
    this._http = "";
    this._data = null;
    this._withCredentials = false;
    this._success = null;
    this._fail = null;
    this.name = "";
    this.url = "";
    this.uid = -1;
    this.progress = 0;
    this.status = "ready";
    for (const option in options) {
      if (hasKey(this, option)) {
        this[option] = options[option];
      } else {
        this["_" + option] = options[option];
      }
    }
  }
  onProgress(e) {
    this.progress = e;
  }
  onSuccess(results) {
    const { name, url } = results;
    this.status = "success";
    this.file = { name, url };
    this._success && this._success(results, this);
  }
  onError(err) {
    this.status = "fail";
    this._fail && this._fail(err, this);
  }
  upload() {
    if (this.status === "fail" || this.status === "ready") {
      this.status = "uploading";
      if (isFunction(this._http)) {
        this._http(this.file);
      } else {
        request(this);
      }
    }
  }
}
export {
  UploadInstance as default,
  getUid,
  parseFileSize
};
