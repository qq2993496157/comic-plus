class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  emit(event, ...args) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  off(event, callback) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }
}
const emitter = new EventEmitter();
export {
  emitter as default
};
