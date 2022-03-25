 class Section{
  constructor({renderer}, container){
    
    this._renderer = renderer;
    this._container = container;
  }
  addItem(item){
   
    this._container.prepend(item);
  }
  renderItems(Items) {
    Items.forEach((res) => {
      this._renderer(res);
    });
  }
}
export {Section}