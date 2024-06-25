import _alert from "./alert/main.mjs";
import _confirm from "./confirm/main.mjs";
import _message from "./message/main.mjs";
import _notice from "./notice/main.mjs";
const CuMessageBox = {
  alert: _alert,
  confirm: _confirm,
  message: _message,
  notice: _notice
};
export {
  CuMessageBox as default
};
