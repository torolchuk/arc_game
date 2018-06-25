export class KeyboardEventBinder {
  constructor() {
    this.listeners = {};
    this.pushedKey = new Set();

    window.addEventListener("keydown", this);
    window.addEventListener("keyup", this);
  }

  register(keyCodeArray, listener) {
    keyCodeArray.forEach(item => {
      if (!this.listeners[item]) {
        this.listeners[item] = new Set();
      }
      this.listeners[item].add(listener);
    });
  }

  handleEvent(event) {
    event.preventDefault();
    if (event.type === "keydown") {
      if (this.pushedKey.has(event.keyCode)) return;
      this.pushedKey.add(event.keyCode);
    } else if (event.type === "keyup") {
      this.pushedKey.delete(event.keyCode);
    }

    if (this.listeners[event.keyCode]) {
      this.listeners[event.keyCode].forEach(item => {
        item(event);
      });
    }
  }
}
