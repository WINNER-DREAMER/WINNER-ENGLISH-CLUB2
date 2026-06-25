/* ====================================
   WINNER ENGLISH CLUB
   PREMIUM JAVASCRIPT
==================================== */
/* ========= MENU LATÉRAL ========= */
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
if(menuBtn){
    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
    });
}
if(closeBtn){
    closeBtn.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
}
if(overlay){
    overlay.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
}
/* ========= TÉMOIGNAGES ========= */
const testimonialText =
document.getElementById("testimonialText");
const testimonials = [
"Grâce à Winner English Club, j'ai gagné confiance en moi et je parle anglais beaucoup plus facilement.",
"La méthode est très pratique. Après quelques semaines seulement, j'étais capable de tenir une conversation en anglais.",
"Les formateurs sont très professionnels et l'environnement favorise réellement l'apprentissage.",
"J'ai amélioré mon anglais pour mes études et mes opportunités professionnelles.",
"Winner English Club m'a permis de préparer efficacement mon entretien en anglais.",
"L'accompagnement est sérieux, motivant et orienté vers les résultats."
];
let testimonialIndex = 0;
function changeTestimonial(){
    if(testimonialText){
        testimonialText.style.opacity = "0";
        setTimeout(() => {
            testimonialIndex++;
            if(testimonialIndex >= testimonials.length){
                testimonialIndex = 0;
            }
            testimonialText.innerText =
            testimonials[testimonialIndex];
            testimonialText.style.opacity = "1";
        },500);
    }
}
setInterval(changeTestimonial,5000);
/* ========= ANIMATION AU SCROLL ========= */
const animatedElements =
document.querySelectorAll(
".card, .exam-box, .testimonial-box, .intro, .cta"
);
const observer =
new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});
animatedElements.forEach(element=>{
    element.classList.add("hidden");
    observer.observe(element);
});
/* ========= BOUTONS ========= */
const buttons =
document.querySelectorAll(
".btn-primary, .btn-secondary"
);
buttons.forEach(button=>{
    button.addEventListener("mouseenter",()=>{
        button.style.transform =
        "translateY(-4px)";
    });
    button.addEventListener("mouseleave",()=>{
        button.style.transform =
        "translateY(0)";
    });
});
/* ========= SCROLL HEADER ========= */
window.addEventListener("scroll",()=>{
    const header =
    document.querySelector(".header");
    if(!header) return;
    if(window.scrollY > 50){
        header.style.padding =
        "12px 6%";
        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.15)";
    }
    else{
        header.style.padding =
        "18px 6%";
        header.style.boxShadow =
        "none";
    }
});
/* ========= SCROLL TOP ========= */
const scrollButton =
document.createElement("button");
scrollButton.innerHTML =
'<i class="fas fa-arrow-up"></i>';
scrollButton.className =
"scroll-top-btn";
document.body.appendChild(scrollButton);
scrollButton.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
window.addEventListener("scroll",()=>{
    if(window.scrollY > 500){
        scrollButton.classList.add("visible");
    }
    else{
        scrollButton.classList.remove("visible");
    }
});
/* ========= ANNÉE AUTOMATIQUE ========= */
const yearElement =
document.getElementById("currentYear");
if(yearElement){
    yearElement.textContent =
    new Date().getFullYear();
}
/* ========= EFFET DE CHARGEMENT ========= */
window.addEventListener("load",()=>{
    document.body.classList.add("loaded");
});
console.log(
"Winner English Club Premium Site Loaded Successfully"
);
