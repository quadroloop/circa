
var socket = io();

// reactron js wrapper functions

function el(elx){return document.getElementById(elx);}
function sclass(clx){return document.getElementsByClassName(clx);}
function show(domId){el(domId).style.display="block"}
function hide(domId){el(domId).style.display="none"}
function render(domId,data){
	domId.innerHTML = data;
};

window.onload=()=>{
	setTimeout(dl=>{
	focusdiv();
	},400)
}

function fulldiv(){
	sclass("divider")[0].style.width="100%";
}

function focusdiv(){
	sclass('divider')[0].style.width="200px";
};

let xpages = ["home","editor","media","manual"];
var escsw = 0;
document.body.onkeyup = (e) =>{
   if(e.keyCode === 27){   
     escsw++;
     if(escsw === 4){
        escsw = 0;
     }

      el(xpages[escsw]).click();
  }
}


let cpage = "phome";

function nav(page){
   fulldiv();
   hide('banner');
   el('banner').innerHTML = page.id;
   show('banner');
   hide(cpage);
   show("p"+page.id);
   switch(page.id){
   	  case 'home':
   	     el('banner-text').innerHTML = "Content Overview.";
   	  break;
   	  case 'editor':
   	     el('banner-text').innerHTML = "Create a new post.";
   	  break;
   	  case 'media':
   	     el('banner-text').innerHTML = "Media Library.";
   	  break;
   	  case 'manual':
   	     el('banner-text').innerHTML = "Tips & Tricks";
   	  break;
   }

    cpage = "p"+page.id;

   setTimeout(dl=>{
   	 focusdiv();
   },500);
}


function manageFiles(){
	socket.emit("openMedia");
}

