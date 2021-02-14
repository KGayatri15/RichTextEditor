
class Model extends EventEmitter{
  constructor(){
    super();
    this._Data = "";
    this.Toolbar1Items = toolbar1;
    this.Toolbar2Items = toolbar2;
  }
  static formatDoc(command, value) {
    document.execCommand(command, false, value); 
  }
  setData(data){
    this._Data = data;
    this.emit('SaveData',data);
  }

}