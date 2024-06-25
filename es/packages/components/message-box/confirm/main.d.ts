import { ConfirmOptions } from './src/main.props';

/**
 * @description: _confirm
 * @param {*} options
 * @return {*}
 */
declare function _confirm(options: ConfirmOptions): Promise<void>;
export default _confirm;
