
function doFirst(){
    pics = document.getElementById("names");
    pics.addEventListener("dragstart", startDrag, false);
    categories = document.getElementById("categories");
    categories.addEventListener("dragenter", function(e){e.preventDefault();},false);
    categories.addEventListener("dragover", function(e){e.preventDefault();},false);
    categories.addEventListener("drop", dropped, false);
}

function startDrag(e){
   var code = '<table id="names" border="1"></table>';
   e.dataTransfer.setData('Text', code);
}
function dropped(e){
  e.preventDefault();
  categories.innerHTML = e.dataTransfer.getData('Text');
}
window.addEventListener("load", doFirst, false);
