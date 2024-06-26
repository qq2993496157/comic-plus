import type { Fileoption, UploadError } from '../src/type';
import { isFunction } from '../../../utils';

let temp = 1;

export function getUid() {
  return Date.now() + temp++;
}

export function parseFileSize(fileSizeStr?: string) {
  const regex = /^(\d+)\s*([kmgt]?b)$/i;
  const match = fileSizeStr?.match(regex);
  if (!match) {
    throw new Error('Invalid file size format');
  }
  const size = parseFloat(match[1]);
  const unit = match[2].toLowerCase();
  switch (unit) {
    case 'b':
      return size;
    case 'kb':
      return size * 1024;
    case 'mb':
      return size * 1024 * 1024;
    case 'gb':
      return size * 1024 * 1024 * 1024;
    case 'tb':
      return size * 1024 * 1024 * 1024 * 1024;
    default:
      throw new Error('Invalid file size unit');
  }
}

function setRequestHeaders(xhr: XMLHttpRequest, headers: Object) {
  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key]);
  });
}

function getBody(xhr: XMLHttpRequest): XMLHttpRequestResponseType {
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

function getError(http: string, xhr: XMLHttpRequest) {
  let msg: any;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to post ${http} ${xhr.status}`;
  }

  const err = new Error(msg) as UploadError;
  err.status = xhr.status;
  err.method = 'post';
  err.url = http;
  // console.error(msg);
  return err;
}

function request(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }
  const xhr = new XMLHttpRequest();
  const formData = new FormData();

  if (option._data) {
    Object.keys(option._data).forEach((key) => {
      formData.append(key, option._data[key]);
    });
  }

  formData.append('file', option.file);

  if (option._headers) {
    setRequestHeaders(xhr, option._headers);
  }

  xhr.withCredentials = option._withCredentials;
  xhr.open('POST', option._http, true);

  if (xhr.upload) {
    xhr.upload.onprogress = function (event) {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
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

export default class UploadInstance {
  private _headers: any = null;
  private _http: string | Function = '';
  private _data: any = null;
  private _withCredentials: boolean = false;

  private _success: Function | null = null;
  private _fail: Function | null = null;

  name: string = '';
  url: string = '';
  uid: number = -1;
  file: { name: string; url?: string };
  progress: number = 0;
  status: string = 'ready';

  constructor(options: Fileoption) {
    for (const option in options) {
      if (hasKey(this, option)) {
        this[option] = options[option];
      } else {
        this['_' + option] = options[option];
      }
    }
  }

  onProgress(e: number) {
    this.progress = e;
  }

  onSuccess(results: any) {
    const { name, url } = results;
    this.status = 'success';
    this.file = { name, url };
    this._success && this._success(results, this);
  }

  onError(err: UploadError) {
    this.status = 'fail';
    this._fail && this._fail(err, this);
  }

  upload() {
    if (this.status === 'fail' || this.status === 'ready') {
      this.status = 'uploading';
      if (isFunction(this._http)) {
        this._http(this.file);
      } else {
        request(this);
      }
    }
  }
}
