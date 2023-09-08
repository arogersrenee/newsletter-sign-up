(function validateForm() {
        const form = document.querySelector("form");
        const subscribe = document.querySelector("#signup-screen");
        const confirmSub = document.querySelector("#success-message");
        const email = document.querySelector("#email");
        const emailPlaceholder = document.querySelector("#email-placeholder");
        const errorMsg = document.querySelector("#error-msg")

        const emailRegex =
            new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);

        form.addEventListener("submit", (e) => {
            e.preventDefault;
            validateEmail();
        })

        function validateEmail() {
            if (!emailRegex.test(email.value.trim())){
                errorMsg.classList.remove("no-error");
                return false;
            } else {
                subscribe.classList.add("hide");
                confirmSub.classList.remove("hide");
                return true
            }
        }
    }
)()