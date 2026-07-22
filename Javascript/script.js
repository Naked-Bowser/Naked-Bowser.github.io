/****
 * Author: Maramkhah, Shayon
 * Date: May 28th, 2026, 13:49
 * Description: Atom smasher, canvas, 2d context...
 * ****/

//Reference document object model cavans...

var randomNumber= Math.floor(Math.random()*100 + 1);

function draw(){
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle="blue";
ctx.fillRect(randomNumber,randomNumber,randomNumber,randomNumber);
requestAnimationFrame(draw);
}

requestAnimationFrame(draw);


