const getCont = document.querySelector(".FlexContainer");

const getDot = document.querySelector(".Dot");

const getParameters = getCont.getBoundingClientRect();

const getParameters1 = getDot.getBoundingClientRect();

console.log("FlexContainer");
console.log("X value",getParameters.x);
console.log("Y value",getParameters.y);
console.log("Top value",getParameters.top);
console.log("left value",getParameters.left);
console.log("Width value",getParameters.width);
console.log("Height value",getParameters.height);
console.log("Right value",getParameters.right);
console.log("Bottom value",getParameters.bottom);
console.log("Dot")
console.log("X value",getParameters1.x);
console.log("Y value",getParameters1.y);
console.log("Top value",getParameters1.top);
console.log("Left value",getParameters1.left);
console.log("Width value",getParameters1.width);
console.log("Height value",getParameters1.height);
console.log("Right value",getParameters1.right);
console.log("Bottom value",getParameters1.bottom);

setInterval(()=>{
getDot.style.top = `${Math.floor(Math.random()*(getParameters.height))-13}px`;
getDot.style.left = `${Math.floor(Math.random()*(getParameters.width))-13}px`;
},5200);
var point =0;

const points = document.createElement("p");
points.style.top = "0px";
points.style.left = "100px";
points.style.backgroundColor = "green";

const body = document.querySelector("body");
body.appendChild(points);

getDot.addEventListener("click",(e)=>{
	point+=1;
	points.innerText = `${point}`;
	getDot.style.top = `${Math.floor(Math.random()*getParameters1.height)}px`;
	getDot.style.left = `${Math.floor(Math.random()*getParameters1.width)}px`;
});

