/****
 * Author: Maramkhah, Shayon
 * Date: May 28th, 2026, 13:49
 * Description: Atom smasher, canvas, 2d context...
 * ****/

//Reference document object model cavans...

function drawit(){
	const canvas = document.getElementById("canvas");
	const ctx = getContext("2d");
	ctx.fillStyle="yellow";
	ctx.fillRect(10,10,55,100);
	requestAnimationFrame(drawit);
}

drawit();


