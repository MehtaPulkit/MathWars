// Utilities

/*HTML elements are created in the following functions
and each returns the respective element*/
/*
Here is the syntax
This function creates an element and adds text and class to the element.
function createAnyElement(titleText,className){
  var element= document.createElement("TAG");
  var t=document.createTextNode(titleText);
  element.appendChild(t);
  element.classList.add(className);
  return element; 
}
Each function returns the element with required child nodes, styles and attributes.
*/
//creates div element
function createDiv(className){
  var element= document.createElement("div");
  element.classList.add(className);
  return element;
}
//creates heading element
function createHeading1(titleText,className){
  var element= document.createElement("H1");
  var t=document.createTextNode(titleText);
  element.appendChild(t);
  element.classList.add(className);
  return element;
}
//creates button element
function createButton(titleText,className){
  var element= document.createElement("button");
  var t=document.createTextNode(titleText);
  element.appendChild(t);
  element.classList.add(className);
  return element;
}
//creates paragraph element
function createParagraph(titleText,className){
  var element= document.createElement("p");
  var t=document.createTextNode(titleText);
  element.appendChild(t);
  element.classList.add(className);
  return element;
}
//creates textBox element
function createTextBox(){
  var element= document.createElement("input");
  element.setAttribute("type","text");
  return element;
}
//creates a new line
function createBreakLine(){
  var element=document.createElement("br");
  return element;
}
//creates an Image
function createImage(url){
  var element=document.createElement("img");
  element.setAttribute("src",url);
  return element;
}
//create span element
function createSpan(text,className){
  var element=document.createElement("span");
  var t=document.createTextNode(text);
  element.classList.add(className);
  element.appendChild(t);
  return element;
}
// creates Audio element
function createAudio(source){
  var element=document.createElement("audio");
  element.src=source;
  element.type="audio/mp3";
  // Setting up the Autoplay and loop properties
  element.setAttribute("autoplay",true);
  element.setAttribute("loop",true);
  return element;
}
