
const counter = document.getElementById("myH1");
const incr = document.getElementById("inc");
const resets = document.getElementById("reset");
const decr = document.getElementById("dec");
let count = 0;

incr.onclick = function(){
    count++;
    counter.textContent = count; 
}

resets.onclick = function(){
    count = 0;
    counter.textContent = count;
}


decr.onclick = function(){
    count--;
    counter.textContent = count;
}