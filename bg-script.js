var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient(){
      body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
      css.textContent = body.style.background;
}

function randomBg(){
    var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
    var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient()
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomBg);

setGradient()




//random.addEventListener("onclick", randomColor);



//
//color1.addEventListener("input", function(){
//    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
//
//})
////
//color2.addEventListener("input", function(){
//    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
//})


