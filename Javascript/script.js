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
 *		Commands:
 *			querySelector();
 *			getBoundingClientRect();
 *			classList.add
 *			createElement
 *			style.display
 *			document.body.appendChild();
 *			...
 * **/

function Smasher(){
	const dot = document.querySelector(".Dot");
	const range = document.querySelector(".Container-Smasher");
	const rect = range.getBoundingClientRect();
	const obj = [];
	for(const key in rect){
		if(typeof rect[key] !== "function"){
			obj.push(`${rect[key]}`);		
		}
	}

	const x = obj[0]; const y = obj[1]; const width = obj[2]; const hieght = obj[3];
	const topy = obj[4]; const righty = obj[5]; const bottom = obj[6]; const lefty = obj[7];
	
	//Set random top and left values for the smasher..
	const MAX_INTw = righty-100;
	const leftX = dot.style.left = `${Math.floor(Math.random()*MAX_INTw)}px`;
	
	const MAX_INTh = topy;
	const topyh = dot.style.top = `${Math.floor(Math.random()*MAX_INTh)}px`; 
	
	dot.style.transform = `translateY(${(topyh)})px)`;
	dot.style.transform += `translateX(${(leftX)-50})px)`;
}// end function smasher...

//CODE BODY ?
const dot = document.querySelector(".Dot");
const points = document.querySelector(".Points");

var point = 0;

//EVENT LISTENER
dot.addEventListener("click",(ev)=>{
	point ++;
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


	dot.style.transform = `translateY(${Math.floor(Math.random()*120)})px`;
	dot.style.transform = `translateX(${Math.floor(Math.random()*255)})px`;
	
});

setInterval(Smasher,1500);




