const faqButtons =
document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

button.addEventListener("click", () => {

const answer =
button.nextElementSibling;

if(answer.style.display === "block"){
answer.style.display = "none";
}
else{
answer.style.display = "block";
}

});

});

const testimonials = [

"Excellent institut. J'ai énormément progressé.",

"Les cours sont très pratiques et motivants.",

"Grâce à Winner English Club, j'ai réussi mon entretien en anglais."

];

let index = 0;

setInterval(() => {

index++;

if(index >= testimonials.length){
index = 0;
}

document.getElementById("testimonialText").innerText =
testimonials[index];

},4000);
