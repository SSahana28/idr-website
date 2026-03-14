

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});



const form = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector('input[type="text"]').value.trim();

const email = form.querySelector('input[type="email"]').value.trim();

const message = form.querySelector("textarea").value.trim();


if(name === "" || email === "" || message === ""){

alert("Please fill in all fields");

return;

}

successMessage.textContent = "Thank you! Your interest has been registered.";

form.reset();

});