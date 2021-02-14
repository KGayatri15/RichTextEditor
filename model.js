class EventEmitter {
    constructor() {
      this._events = {};///WE look here for Event and action Mapping
    }
    on(evt, listener) { //eventIdetifier
      (this._events[evt] || (this._events[evt] = [])).push(listener);
      return this;
    }
    emit(evt, arg) { //trigger
      (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
}

var toolbar2 = {
  "undo":"fa fa-undo",
  "redo":"fa fa-redo",
  "bold":"fa fa-bold",
  "italic":"fa fa-italic",
  "underline":"fa fa-underline",
  "strikeThrough":"fa fa-strikethrough",
  "justifyleft":"fa fa-align-left",
  "justifyright":"fa fa-align-right",
  "justifycenter":"fa fa-align-center",
  "justifyall":"fa fa-align-justify",
  "insertUnorderedList":"fa fa-list-ul",
  "insertOrderedList":"fa fa-list-ol",
  "indent":"fa fa-indent",
  "outdent":"fa fa-outdent",
  "cut":"fa fa-cut",
  "copy":"fa fa-copy",
  "paste":"fa fa-paste",
}
var toolbar1 = {
  "formatblock":{
    "selected":"- Formatting -",
    "values":["h1","h2","h3","h4","h5","h6","p","pre"]
  },
  "fontname":{
    "selected":"- Font -",
    "values":["Arial","Arial Black","Courier New","Times New Roman"]
  }, 
  "fontsize":{
    "selected":"- Font Size -",
    "values":["1","2","3","4","5","6","7"]
  },
  "forecolor":{
    "selected":"- color -",
    "values":["Red","Green","Black"]
  },
  "backcolor":{
    "selected":"- background -",
    "values":["Red","Green","Black"]
  }
}

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