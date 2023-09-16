const email = document.getElementById("email");
const form = document.getElementById("newslatter__form");
const emailError = document.getElementById("email__error");
const successMessage = document.getElementById("success__message");
const newslatterCard = document.getElementById("newslatter__card");
const success__button = document.getElementById("success__button");



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

        emailError.setAttribute(
            "style", "display: none;"
        )

        email.setAttribute(
            "style", "border: 1px solid var(--clr-grey);"
        )

        newslatterCard.setAttribute(
            "style", "display: none;"
        )

        successMessage.setAttribute(
            "style", "display: flex;"
        )
        
    }
});

success__button.addEventListener("click", () => {
    successMessage.setAttribute(
        "style", "display: none;"
    )

    newslatterCard.setAttribute(
        "style", "display: flex;"
    )
})