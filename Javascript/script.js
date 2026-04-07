/*********************************************************
 *
 *	Author: Maramkhah, Shayon
 *	Date: January 11th, 2026
 *	Updated: March 20th, 2026, 1:12pm
 *	FileType: script.js
 *	Description: 
 *		Javascript file for dotsmasher. You have 734x430 pixels which is 315,620 sqaure pixel space.
 *
 *		Actions:
 *			1) Intergrate Email correspondence.
 *			2) Can you query google with Fetch API?
 *			3) Orient dot smasher.
 *		Commands:
 *			querySelector();
 *			getBoundingClientRect();
 *			classList.add
 *			createElement
 *			style.display
 *			document.body.appendChild();
 *			...
 * **/

//Global Variables
const points = document.querySelector(".Points");

const dot = document.querySelector(".Dot");
const dotRange = dot.getBoundingClientRect();//Make sure dot is less than or equal to bounds!
const containerBody = document.querySelector("body");//container body
const rect = dot.getBoundingClientRect();//Container bounds

const obj = [];//rect bounds
for(const key in rect){
	if(typeof rect[key] !== "function"){
		obj.push(`${rect[key]}`);
	}
}


const obj1 = [];//dot range bounds
for(const key in dotRange){
	if(typeof dotRange[key] !=="function"){
		obj.push(`${rect[key]}`);
	}
}

//Assign random values to top and left
dot.style.top = `${Math.floor(Math.random()*400)}px`;
dot.style.left = `${Math.floor(Math.random()*400)}px`;

//Point for the event listener
var point =0;

function Smasher(obj){
	/**
	 * Bounding rect height should be used to calculate distance
	 * Bounding rect width should be used to calculate distance
	 * ***/
	const x = obj[0]; const y = obj[1]; const width = obj[2]; const height = obj[3];
	const topy = obj[4]; const righty = obj[5]; const bottom = obj[6]; const lefty = obj[7];
}// end function smasher...

//EVENT LISTENER
containerBody.addEventListener("click",(ev)=>{
	point ++;
	let x = ev.clientX;
	let y = ev.clientY;
	//
	const maxX = window.innerWidth -rect.width;
	const maxY = window.innerHeight -rect.height;

	x = Math.min(Math.max(0,x),maxX);
	y = Math.min(Math.max(0,y),maxY);
	
	dot.style.transform = `translateY(${y}px)`;
	dot.style.transform += `translateX(${x}px)`;
	if(point % 2 == 0){
		dot.style.backgroundColor = "green";
		points.innerText = point;
	}else if(point % 2 != 0 ){
		points.innerText = point;
	}
	if(point ===21){
		points.style.backgroundColor = "red";
		points.style.fontSize = "75px";
		points.style.fontFamiliy = "impact";
		points.style.float = "right";
		points.style.position = "absolute";
		points.style.animationDuration = "5s";
		points.style.animationName = "slide";
		points.innerText = "GAME OVER!";
	}
	
});
//Before we trigger this function, assign the top and left value of the dot random values.

//setInterval(Smasher,1500);




