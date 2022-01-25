class Secton{
  constructor({data, renderer}, containerSelector){
    this._container = document.querySelector(containerSelector);
    this._renderedItems = data;
    this._renderer = renderer;
  }
  addItem(element){
    this._container.append(element);
  }
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}