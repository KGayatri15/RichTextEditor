

class View extends EventEmitter{
    constructor(model,elements){
        super();
        this._model = model;
        this._elements = elements;
        //model listeners

        //setting view of toolbars
        elements.toolbar2.appendChild(this.setToolbar2());
        elements.toolbar1.appendChild(this.setToolbar1());
    }
    setToolbar2(){
        var output = document.createElement("div");
        for(var key in this._model.Toolbar2Items){
            var x = document.createElement("button");
            x.onclick = function() {Model.formatDoc(key,null);}; 
            var y = document.createElement("i");
            y.setAttribute("class",toolbar2[key]);
            x.appendChild(y);
            output.append(x);
        }
        console.log(output);
        return output;
    }
    setToolbar1(){
        var output = document.createElement("div");
        var items =  this._model.Toolbar1Items;
        for(var key in items){
            var x = document.createElement("select");x.setAttribute("onchange", Model.formatDoc(key,this.value));
            var y = document.createElement("option");y.innerText = items[key]["selected"];
            x.appendChild(y);
            for(var i = 0;i < items[key]["values"].length;i++){
                var z = document.createElement("option");
                var data = items[key]["values"][i];
                z.setAttribute("value",data);z.innerText = data;
                x.appendChild(z);
            }
            output.append(x);
        }
        console.log(output);
        return output;
    }
   
}