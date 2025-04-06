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

let chatbotMessages = [
    "Hello! I'm here to assist you with our AI services.",
    "I can help with AI Annotation, Data Labeling, Transcription, and Synthetic Data Creation.",
    "Please share your query, and I'll be happy to assist!"
];

let userMessages = [];


function openChat() {
    document.getElementById("chatbox").style.display = "flex";
    document.getElementById("chat-toggle-btn").style.display = "none";
    showMessage(chatbotMessages[0], "bot");
    chatbotMessages = chatbotMessages.slice(1);  // Remove the first message after displaying
}

function closeChat() {
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("chat-toggle-btn").style.display = "block";
}


function sendMessage(event) {
    if (event.key === "Enter" || event.type === "click") {
        let input = document.getElementById("user-input").value;
        if (input) {
            showMessage(input, "user");
            userMessages.push(input);  // Save the user's message
            document.getElementById("user-input").value = "";

            // Respond based on the user's message
            handleUserQuery(input);
        }
    }
}

function showMessage(message, sender) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender);
    messageDiv.innerText = message;
    document.getElementById("chat-messages").appendChild(messageDiv);
}

function handleUserQuery(input) {
    let response = "";
    if (input.toLowerCase().includes("annotation")) {
        response = "We provide high-quality AI Annotation services for training your models.";
    } else if (input.toLowerCase().includes("labeling")) {
        response = "We offer expert Data Labeling services to ensure your data is perfectly categorized.";
    } else if (input.toLowerCase().includes("transcription")) {
        response = "Our Transcription services convert your audio/video files into text with high accuracy.";
    } else if (input.toLowerCase().includes("synthetic data")) {
        response = "We generate Synthetic Data to complement your existing data for training your models.";
    } else if (input.toLowerCase().includes("email")) {
        response = "Please share your email address so we can send more details!";
    } else {
        response = "Sorry, I didn't understand that. Could you please rephrase your question?";
    }
    showMessage(response, "bot");
}

