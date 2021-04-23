function myFunction(elem) {
    var x = document.getElementById(elem);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
    

// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    handle: '.handle'
  });
  draggies.push( draggie );
}