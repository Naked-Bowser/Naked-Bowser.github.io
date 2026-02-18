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


const dot = document.querySelector(".Dot");

document.addEventListener("click",(ev)=>{
	dot.style.transform = `translateY(${ev.clientY - 25}px)`;
	dot.style.transform += `translateX(${ev.clientX - 25}px)`;

});
