document.addEventListener("DOMContentLoaded", function() {
let div = document.createElement('div');
div.className = "header-container";

let h1 = document.createElement('h1');
let h1Text = document.createTextNode("This is an h1");
h1.className = "h1";

h1.appendChild(h1Text);
div.appendChild(h1);
document.body.appendChild(div);

let h2 = document.createElement('h2');
let h2Text = document.createTextNode("This is an h2");
h2.className = "h2";

h2.appendChild(h2Text);
div.appendChild(h2);


let h3 = document.createElement('h3');
let h3Text = document.createTextNode("This is an h3");
h3.className = "h3";

h3.appendChild(h3Text);
div.appendChild(h3);

let h4 = document.createElement('h4');
let h4Text = document.createTextNode("This is an h4");
h4.className = "h4";

h4.appendChild(h4Text);
div.appendChild(h4);

let h5 = document.createElement('h5');
let h5Text = document.createTextNode("This is an h5");
h5.className = "h5";

h5.appendChild(h5Text);
div.appendChild(h5);

let h6 = document.createElement('h6');
let h6Text = document.createTextNode("This is an h6");
h6.className = "h6";

h6.appendChild(h6Text);
div.appendChild(h6);


document.addEventListener("dblclick", function(){
    
    let headers = ["h1", "h2", "h3", "h4", "h5", "h6"];
    let colors = ["Red", "Gold", "Purple", "Green", "Orange"]

    for(var i = 0; i < headers.length; i++) {
   h1.addEventListener("dblclick", function() {
    
    h1.style.color = randomColor();

    })
    h2.addEventListener("dblclick", function() {
        h2.style.color = randomColor();
   })
   h3.addEventListener("dblclick", function() {
       h3.style.color = randomColor();
   })
   h4.addEventListener("dblclick", function() {
       h4.style.color = randomColor();
   })
   h5.addEventListener("dblclick", function() {
       h5.style.color = randomColor();
   })
   h6.addEventListener("dblclick", function() {
       h6.style.color = randomColor();
   })
}

function randomColor() {
   let randomRed = Math.floor(Math.random() * 255);
   let randomGold = Math.floor(Math.random() * 255);
   let randomPurple = Math.floor(Math.random() * 255);
   //create the string that is the ‘random color’
   let randomColor = "rgb("+ randomRed + "," + randomGold + ", " + randomPurple + ")";

   console.log(randomColor);
   return randomColor;
}
   })   
})