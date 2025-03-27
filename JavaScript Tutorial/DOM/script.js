//DOM
//It is a programming interface that allows us to create, change and remove HTML elements and their content.
//We can access HTML elements in JavaScript using the document object.
//The document object represents the HTML document.
//The document object is the root of the DOM tree.
//The document object is the parent of all other objects in the DOM tree.

document.getElementsByTagName('h1')[0].addEventListener('click', fun);

function fun(){
  console.log('hello');
}