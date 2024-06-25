import { default as notice } from './notice/main';
import { default as confirm } from './confirm/main';
import { default as alert } from './alert/main';

declare const CuMessageBox: {
    alert: typeof alert;
    confirm: typeof confirm;
    message: ((options: import('./message/src/main.props').MessageOptions) => void) & Partial<import('./message/main').Message>;
    notice: typeof notice;
};
export default CuMessageBox;
