// This function validates the contact form
function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Check if fields are empty
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out!");
        return false; // Prevent form submission
    }

    // Basic email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return false;
    }

    // If everything is fine, show a success message
    alert("Thank you for contacting us! We will get back to you soon.");
    return true; // Allow form submission
}

// Example for handling form submit
document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from actually submitting
            if (validateContactForm()) {
                // Simulate form submission (You can add AJAX here for real submission)
                console.log("Form Submitted");
            }
        });
    }
});


// You can add other JavaScript functionalities like confirmation on bookings, etc.

