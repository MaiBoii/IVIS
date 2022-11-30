const hexMode = document.getElementById("hex-mode");
const rgbMode = document.getElementById("RGB-mode");

const hex_value = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; 

const hex = document.getElementById("hex");
const rgb = document.getElementById("rgb");

hex.style.display = "none"

hexMode.addEventListener("click", function () {
    hex.style.display = "block";
    rgb.style.display = "none";
});

rgbMode.addEventListener("click", function () {
    hex.style.display = "none";
    rgb.style.display = "block";
});
  

let colors = [];
for(let i = 0; i<256; i++){
    colors.push(i);
}

const rgbBtn = document.getElementById("rgb-button")
const hexBtn = document.getElementById("hex-button")
const color = document.querySelector('.color');
const color1 = document.querySelector('.color1');

rgbBtn.addEventListener('click', function(){
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    let simpleColor = `RGB(${red},${green},${blue})`
    color.textContent = simpleColor;
    document.body.style.backgroundColor = simpleColor; 
});

hexBtn.addEventListener("click",function(){
    let hexcolor = "#";
    for(let i=0; i<6; i++){
        hexcolor += hex_value[getRandomhexNumber()];
    }
    color1.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); 
}
function getRandomhexNumber(){
    return Math.floor(Math.random() * hex_value.length); 
}