// elementler
const navWrapper = document.querySelector(".nav_wrapper"); 
const menuBtn = document.querySelector(".menu span"); 
const button = document.querySelector(".button button");
const loginForm = document.querySelector(".login_form"); // 
const closeBtn = document.querySelectorAll(".close_btn span"); 
const switchToSignUp = document.querySelector("#switchToSignUp"); 
const signupForm = document.querySelector(".signup_form"); 
const switchToLogin = document.querySelector("#switchToLogin"); 

// click olanda olacag hadiseler
button.addEventListener("click", openLoginForm);
switchToSignUp.addEventListener("click", openSignUpForm);
switchToLogin.addEventListener("click", openLoginForm);
menuBtn.addEventListener("click", openNavWrapper);

// close buttonun funksiyasi
closeBtn.forEach((btn) => {
	btn.addEventListener("click", closeForm);
});
function openNavWrapper() {
	navWrapper.classList.toggle("active");
	if (navWrapper.classList.contains("active")) {
		menuBtn.innerText = "close";
	} else {
		menuBtn.innerText = "menu";
	}
}

// login funksiyasi
function openLoginForm() {
	loginForm.classList.toggle("active");
	signupForm.classList.remove("active");
}

// active klaslarinin silinmesi
function closeForm() {
	loginForm.classList.remove("active");
	signupForm.classList.remove("active");
}
//forma active klasinin elave olunmasi
function openSignUpForm() {
	loginForm.classList.remove("active");
	signupForm.classList.add("active");
}
