var oDoc, sDefTxt;
function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  setDocMode(); 
}
function formatDoc(sCmd, sValue) {
   if(sValue === undefined)sValue = null;
   document.execCommand(sCmd, false, sValue); 
   oDoc.focus(); 
}
function setDocMode() {
  var oContent;
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
    oDoc.contentEditable = true;
  oDoc.focus();
}