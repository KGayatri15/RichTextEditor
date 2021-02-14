
class actionEventEmitter {
    listeners = {};  // key-value pair
/**
 * 
 * @param {*} event : event Name
 * @param {*} fn : callBack Function
 */
    addListener(event, fn) {
        /** 
         * The addListener event checks if the event is already registered.
         * If yes, returns the array, otherwise empty array.
         * A note: Multiple callbacks can be registered against that same event.
         */
        
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return this;
    }
/**
 * This is just an alias to the ‘addListener’ method.
 *  We will be using the ‘on’ method more than the ‘addListener’ method for the sake of convenience.
 * @param {*} event 
 * @param {*} fn 
 */
    on(event, fn) {
        return this.addListener(event, fn);
    }

    removeListener(event, fn) {
        let lis = this.listeners[event];//Grab the array of listeners by ‘event’
        if (!lis) return this;//If none found return ‘this’ for chaining.
        /** 
         *If found, loop through all listeners.
          If the current listener matches with the ‘fn’ parameter use the splice method of the array to remove it. 
          Break from the loop.
         *
         */
        for (let i = lis.length; i > 0; i--) {
            if (lis[i] === fn) {
                lis.splice(i, 1);
                break;
            }
        }
        return this;// Return ‘this’ to continue chaining
    }

    off(eventName, fn) { }

    once(eventName, fn) { }

    emit(eventName, ...args) { }

    listenerCount(eventName) { }

    rawListeners(eventName) { }
}