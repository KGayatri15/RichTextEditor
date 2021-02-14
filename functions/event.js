class EventEmitter {
    constructor() {
        this._events = {};///WE look here for Event and action Mapping
        console.log("registered _events",this._events);
    }
    on(evt, listener) { //eventIdetifier
       
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        console.log("on Triggerd", evt,listener)
        
        return this;
    }
    emit(evt, arg) { //trigger
        console.log("emitCalled",evt, arg);
        (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
}
