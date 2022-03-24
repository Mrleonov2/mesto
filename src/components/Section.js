 class Section{
  constructor({renderer}, container){
    
    this._renderer = renderer;
    this._container = container;
  }
  addItem(element){
    this._container.prepend(element);
  }
  renderItems(renderedItems) {
    renderedItems.forEach((res) => {
      this._renderer({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,     
        owner: {_id:res.owner._id}
        
      });
    });
  }
}
export {Section}