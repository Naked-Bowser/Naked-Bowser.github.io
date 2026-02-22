/*********************************************************
 *
 *	Author: Maramkhah, Shayon
 *	Date: January 11th, 2026
 *	Updated: February 18th, 2026
 *	Description: 
 *		Javascript file for dotsmasher. You have 734x430 pixels which is 315,620 sqaure pixel space.
 *
 *		Actions:
 *			1) Intergrate Email correspondence
 *			2) Can you query google with Fetch API
 *			3) Orient dot smasher
 * **/

function Smasher(){
	const MAX_INT = 256;
	const dot = document.querySelector(".Dot");
	dot.style.transform = `translateY(${Math.floor(Math.random() * MAX_INT-26)}px)`;
	dot.style.transform += `translateX(${Math.floor(Math.random() * MAX_INT)}px)`;
}

const dot = document.querySelector(".Dot");
const points = document.querySelector(".Points");

var point = 0;

dot.addEventListener("click",(ev)=>{
	point ++;
	if(point % 2 == 0){
		dot.style.backgroundColor = "green";
		points.innerText = point;
	}else{
		dot.style.backgroundColor = "red";
		points.innerText = point;
	}
});

setInterval(Smasher,1000);
