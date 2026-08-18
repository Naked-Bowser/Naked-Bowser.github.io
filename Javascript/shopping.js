//Global Varibles
const paragraph = document.querySelector(".para1");
const childParagraph = document.createElement("p");
const highlight = document.querySelector(".highlight");
const input = document.querySelector(".Sticky");
const btn = document.querySelector(".btn");

//promised based api expects a response and request with data...
async function getTextBegin(){
	const url = "http://localhost:8080/Javascript/Text/begin.txt";
	try{
	const response = await fetch(url);
	if(!response.ok){
		throw new Error(`HTTP error! Status:${response.status}`);
	}
		const result =await response.blob();
		console.log(`${result}`);
		childParagrpah.innerText= result;
		paragraph1.appendChild(childParagraph);
	})catch{
		console.log(`${error}`);
	}


btn.addEventListener("click",()=>{
	highlight.innerText += ", "+input.value;
	input.value="";
	
});
