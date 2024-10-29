let uForm = document.querySelector("form");
const uEmail = "facundo@gmail.com";
const uPassword = "facundo";

uForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(uForm);
    let nEmail = formData.get("email");
    let nPassword = formData.get("password");

    if (uEmail === nEmail && uPassword === nPassword) {
        localStorage.setItem("session", nEmail);
        window.location.href = "../e-comerce.html";
    } else {
        alert("Email o Password incorrectos");
    }
});

