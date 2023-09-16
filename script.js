const email = document.getElementById("email");
const form = document.getElementById("newslatter__form");
const emailError = document.getElementById("email__error");
const successMessage = document.getElementById("success__message");


form.addEventListener("submit", (e) => {
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || email.value == "" || email.value == null){
        emailError.setAttribute(
            "style", "display: inline;"
        )
        email.setAttribute(
            "style", "border: 1px solid var(--clr-tomato); color: var(--clr-tomato); background-color: var(--clr-tomato-light);"
        )
        e.preventDefault();
    } else{
        successMessage.setAttribute(
            "style", "display: flex;"
        )
    }
});