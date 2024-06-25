declare class EventEmitter {
    private listeners;
    emit(event: string, ...args: any[]): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
}
declare const _default: EventEmitter;
export default _default;
