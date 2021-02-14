class Controller{
 constructor(model,view){
     this._model = model;
     this._view = view;
     view.on('saveButtonClicked',()=>this.save())
 }
 save(){
    this._model.setData(this._view._elements.text.innerText);
 }
}