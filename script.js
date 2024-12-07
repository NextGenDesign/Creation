// Scroll to Services section
function scrollToServices() {
    document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
}

// Optional: Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
});
