
var socket = io();

// reactron js wrapper functions

function el(elx){return document.getElementById(elx);}
function sclass(clx){return document.getElementsByClassName(clx);}
function show(domId){el(domId).style.display="block"}
function hide(domId){el(domId).style.display="node"}
function render(domId,data){
	domId.innerHTML = data;
};



