document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        if (!validateName(nameInput.value)) {
            alert("Please enter a valid name.");
            event.preventDefault();
        }

        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email.");
            event.preventDefault();
        }

        if (!validateMessage(messageInput.value)) {
            alert("Please enter a message.");
            event.preventDefault();
        }
    });

    function validateName(name) {
        return name.trim() !== "";
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateMessage(message) {
        return message.trim() !== "";
    }
});
