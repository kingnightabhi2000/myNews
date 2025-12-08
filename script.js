
var signInLink = document.getElementById("signInLink");
var signinModal = document.getElementById("signinModal");
var signinOverlay = document.getElementById("signinOverlay");
var closeSignin = document.getElementById("closeSignin");
var signinForm = document.getElementById("signinForm");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var signinError = document.getElementById("signinError");
var signinSuccess = document.getElementById("signinSuccess");


if (signInLink) {
    signInLink.addEventListener("click", function (event) {
        event.preventDefault();
        signinModal.classList.remove("hidden");
        signinOverlay.classList.remove("hidden");

        signinError.textContent = "";
        signinSuccess.textContent = "";
        signinEmail.value = "";
        signinPassword.value = "";
    });
}


if (closeSignin) {
    closeSignin.addEventListener("click", function () {
        signinModal.classList.add("hidden");
        signinOverlay.classList.add("hidden");
    });
}


if (signinOverlay) {
    signinOverlay.addEventListener("click", function () {
        signinModal.classList.add("hidden");
        signinOverlay.classList.add("hidden");
    });
}


function isValidEmail(email) {

    if (email.indexOf("@") === -1) {
        return false;
    }
    if (email.indexOf("gmail") === -1) {
        return false;
    }
    if (email.indexOf(".") === -1) {
        return false;
    }
    return true;
}


if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var email = signinEmail.value.trim();
        var password = signinPassword.value.trim();


        signinError.textContent = "";
        signinSuccess.textContent = "";


        if (email === "" || password === "") {
            signinError.textContent = "Please fill in both fields.";
            return;
        }

        if (!isValidEmail(email)) {
            signinError.textContent = "Please enter a valid email address.";
            return;
        }

        if (password.length < 6) {
            signinError.textContent = "Password should be at least 6 characters.";
            return;
        }


        signinSuccess.textContent = "Signed in as " + email;

    setTimeout(function () {
        signinModal.classList.add("hidden");
        signinOverlay.classList.add("hidden");
    }, 1000); 

    signInLink.style.display = "none";
    });
}
