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
		const result =await response.text();
		console.log(`${result}`);
		paragraph.appendChild(childParagraph);
		childParagraph.innerText=result;
	}catch(error){
		console.log(`${error}`);
	}//end catch


}//end async

getTextBegin();

btn.addEventListener("click",()=>{
        highlight.innerText = ", "+input.value;
        input.value="";

});


