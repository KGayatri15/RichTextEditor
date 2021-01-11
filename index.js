var oDoc, sDefTxt;
function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
}
function formatDoc(sCmd, sValue) {
   if(sValue === undefined)sValue = null;
   document.execCommand(sCmd, false, sValue); 
   oDoc.focus(); 
}
