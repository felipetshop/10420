
var btn = document.querySelector(".yes");
var position
btn.addEventListener("click", function() {});

var btn = document.querySelector(".no");
var position
btn.addEventListener("mouseover", function() {
position ? (position = Math.floor( (Math.random()*-100) +100 -50)) : 
(position = Math.floor( (Math.random()*100)-100 +50));
btn.style.transform = `translate(${position}2px,${position}px)`;
btn.style.transition = "all 0.02s ease";
});

function tanks() {
alert("Obrigado!! então vamos comer um sushizinho ❤❤😍");
}    
