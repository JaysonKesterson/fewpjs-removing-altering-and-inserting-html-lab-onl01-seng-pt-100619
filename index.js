// Write your code here!
let main = document.querySelector("main#main");
main.remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "is the champion";
document.body.appendChild(newHeader);