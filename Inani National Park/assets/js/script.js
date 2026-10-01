/* =========================================
   INANI NATIONAL PARK JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    if (navLinks) {

        navLinks.classList.toggle("show");

    }

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            const navLinks =
                document.getElementById("navLinks");

            if (navLinks) {

                navLinks.classList.remove("show");

            }

        });

    });

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

function validateForm() {

    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    const phone =
        document.getElementById("phone");

    const subject =
        document.getElementById("subject");

    const message =
        document.getElementById("message");

    const formMessage =
        document.getElementById("formMessage");


    if (
        !name ||
        !email ||
        !phone ||
        !subject ||
        !message
    ) {

        return false;

    }


    if (name.value.trim() === "") {

        showFormMessage(
            "Please enter your name.",
            "error"
        );

        name.focus();

        return false;

    }


    if (email.value.trim() === "") {

        showFormMessage(
            "Please enter your email address.",
            "error"
        );

        email.focus();

        return false;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email.value.trim())) {

        showFormMessage(
            "Please enter a valid email address.",
            "error"
        );

        email.focus();

        return false;

    }


    if (phone.value.trim() === "") {

        showFormMessage(
            "Please enter your phone number.",
            "error"
        );

        phone.focus();

        return false;

    }


    if (subject.value.trim() === "") {

        showFormMessage(
            "Please enter a subject.",
            "error"
        );

        subject.focus();

        return false;

    }


    if (message.value.trim() === "") {

        showFormMessage(
            "Please write your message.",
            "error"
        );

        message.focus();

        return false;

    }


    showFormMessage(
        "Thank you! Your message has been submitted successfully.",
        "success"
    );


    document.getElementById("contactForm").reset();


    return false;

}


/* =========================================
   FORM MESSAGE
========================================= */

function showFormMessage(text, type) {

    const formMessage =
        document.getElementById("formMessage");

    if (!formMessage) {
        return;
    }


    formMessage.textContent = text;


    if (type === "success") {

        formMessage.style.color = "#287a45";

    } else {

        formMessage.style.color = "#c0392b";

    }

}