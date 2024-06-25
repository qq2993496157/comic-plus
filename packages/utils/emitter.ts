interface Listeners {
  [key: string]: Function[];
}

class EventEmitter {
  private listeners = {} as Listeners;

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener: Function) => {
      listener(...args);
    });
  }

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event] = this.listeners[event].filter((listener: Function) => listener !== callback);
  }
}

export default new EventEmitter();
