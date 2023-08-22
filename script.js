var h3 = document.querySelector("h3");
var color1 = document.getElementById("colour1");
var color2 = document.getElementById("colour2"); 
var body = document.querySelector("body");
function changecolor() {
    body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
    h3.textContent = body.style.background+";";
}
color1.addEventListener("input", changecolor);
color2.addEventListener("input", changecolor);