export default class Storage {
  constructor(key) {
    this.key = key;
  }

  setItem(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  getItem() {
    const result = localStorage.getItem(this.key);

    try {
      return JSON.parse(result);
    } catch (error) {}
  }

  removeItem() {
    localStorage.removeItem(this.key);
  }
}
