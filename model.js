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