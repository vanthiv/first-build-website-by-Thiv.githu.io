const body = document.body;
const navUL = document.getElementById("nav-ul");
let nightmode =  false;

function Changemode() {
    nightmode = !nightmode;
    body.classList.toggle("blackMode");
    navUL.style.backgroundColor= nightmode ? "black" : "white";
}
function toggleOffmenu(){
    navUL.style.left= "-100%"; 
}
function toggleOnmenu(){
    navUL.style.left= "0"; 
}