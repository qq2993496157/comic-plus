import { MessageOptions } from './src/main.props';

type MessageFn = (options: MessageOptions) => void;
type MessageTypedFn = (message: string) => void;
export interface Message extends MessageFn {
    primary: MessageTypedFn;
    success: MessageTypedFn;
    warning: MessageTypedFn;
    info: MessageTypedFn;
    error: MessageTypedFn;
}
declare const _message: MessageFn & Partial<Message>;
export default _message;
