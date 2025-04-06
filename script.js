document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the form data
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const query = document.getElementById('query').value;

    // Check if the form is filled
    if (email && phone && query) {
        // Example: Log the form data to the console (you would submit this to a backend here)
        console.log("Form Submitted");
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Query:", query);

        // Optionally, display a success message
        alert("Your form has been submitted successfully!");

        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill all fields.");
    }
});
