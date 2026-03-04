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

function ContainerIdentifier(){
	const ele = document.querySelector(".Container-Smasher");
	const rect = ele.getBoundingClientRect();
	
	for(const key in rect){
		if(typeof rect[key] !== "function"){
			const para = document.createElement("p");
			para.style.justifyContent = "space-between";
			para.style.paddingRight = "5px";
			para.style.flexDirection = "row";
			document.body.appendChild(para);
			para.textContent = `${key} : ${rect[key]}`;
		}
	}

}//end Container Identifier


function AtomSmasher(){
	const ele = document.querySelector(".Dot");
	const rect = ele.getBoundingClientRect();
	
	const container = document.createElement("div");
	container.classList.add("Info");
	container.style.display = "flex";
	document.body.appendChild(container);

	function InnerPara(){
	for(const key in rect){
		if(typeof rect[key] !== "function"){
			const para = document.createElement("p");
			para.classList.add("Pinfo");
			para.style.justifyContent = "space-between";
			para.style.paddingRight = "5px";
			para.style.flexDirection = "row";
			document.body.appendChild(para);
			container.appendChild(para);
			para.textContent = `${key} : ${rect[key]}`;
		}
	  }
	}//End function InnerPara
	InnerPara();	
}//End function AtomSmasher


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

const dot = document.querySelector(".Dot");
const points = document.querySelector(".Points");

var point = 0;

dot.addEventListener("click",(ev)=>{
	point ++;
	if(point === 21){
		points.style.backgroundColor = "red";
		points.style.fontFamily = "impact";
		points.style.fontSize = "75px";
		points.style.float = "right";
		points.style.postion = "absolute";
		points.style.animationDuration = "5s";
		points.style.animationName = "slide";
		points.style.innerText= "GAME OVER!";
	}
	if(point % 2 == 0){
		dot.style.backgroundColor = "green";
		points.innerText = point;
	}else{
		dot.style.backgroundColor = "red";
		points.innerText = point;
	}

	dot.style.transform = `translateY(${Math.floor(Math.random()*120)})px`;
	dot.style.transform = `translateX(${Math.floor(Math.random()*255)})px`;
	
});

setInterval(Smasher,1000);
//AtomSmasher();
ContainerIdentifier();




