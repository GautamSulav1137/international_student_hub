// ========================================
// INTERNATIONAL STUDENT HUB
// JavaScript
// ========================================


// ========================================
// SCROLL TO SECTION
// ========================================

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ========================================
// STUDENT INFORMATION
// ========================================

const information = {

    university: {
        title: "University Information",
        text: `
            <strong>Useful University Resources</strong><br><br>
            • Academic calendar<br>
            • Course and assignment information<br>
            • Campus facilities<br>
            • Student services<br>
            • Important university links
        `
    },

    work: {
        title: "Part-Time Work",
        text: `
            <strong>Work Support for International Students</strong><br><br>
            • Part-time work information<br>
            • Workplace communication<br>
            • Useful workplace vocabulary<br>
            • Important preparation checklist<br>
            • Useful resources
        `
    },

    housing: {
        title: "Housing",
        text: `
            <strong>Housing Information</strong><br><br>
            • Finding accommodation<br>
            • Basic housing vocabulary<br>
            • Communication with landlords<br>
            • Moving checklist<br>
            • Useful housing resources
        `
    },

    restaurant: {
        title: "Restaurant Information",
        text: `
            <strong>Restaurant Information</strong><br><br>
            • Ordering food<br>
            • Asking for the menu<br>
            • Asking for the bill<br>
            • Understanding common Korean food terms<br>
            • Useful restaurant expressions
        `
    },

    hospital: {
        title: "Hospital Information",
        text: `
            <strong>Healthcare Communication</strong><br><br>
            • Making an appointment<br>
            • Basic hospital vocabulary<br>
            • Explaining a simple situation<br>
            • Asking for directions inside a hospital<br>
            • Useful healthcare resources
        `
    },

    bank: {
        title: "Banking Information",
        text: `
            <strong>Banking Information</strong><br><br>
            • Common banking vocabulary<br>
            • Basic account-related information<br>
            • Useful expressions<br>
            • Preparing for a bank visit<br>
            • Useful banking resources
        `
    }

};


// Show student information

function showInfo(type) {

    const info = information[type];

    if (!info) {
        return;
    }

    alert(
        info.title + "\n\n" +
        info.text
            .replace(/<br>/g, "\n")
            .replace(/<[^>]*>/g, "")
    );
}


// ========================================
// LANGUAGE ASSISTANT
// ========================================

const languageData = {

    University: {

        korean: "교수님, 질문이 있습니다.",

        pronunciation:
            "Gyosunim, jilmun-i itseumnida.",

        meaning:
            "Professor, I have a question."

    },


    Restaurant: {

        korean: "메뉴판 주세요.",

        pronunciation:
            "Menyupan juseyo.",

        meaning:
            "Please give me the menu."

    },


    Workplace: {

        korean: "오늘 출근해야 하나요?",

        pronunciation:
            "Oneul chulgeunhaeya hanayo?",

        meaning:
            "Do I have to come to work today?"

    },


    Housing: {

        korean: "방을 보고 싶습니다.",

        pronunciation:
            "Bang-eul bogo sipseumnida.",

        meaning:
            "I would like to see the room."

    },


    Hospital: {

        korean: "예약이 있습니다.",

        pronunciation:
            "Yeyag-i itseumnida.",

        meaning:
            "I have an appointment."

    },


    Bank: {

        korean: "계좌를 만들고 싶습니다.",

        pronunciation:
            "Gyejwareul mandeulgo sipseumnida.",

        meaning:
            "I would like to open an account."

    }

};


// Select language situation

function selectCategory(category) {

    const data = languageData[category];

    if (!data) {
        return;
    }

    document.getElementById("category-title").textContent =
        category;


    document.getElementById("phrase-content").innerHTML = `

        <div class="phrase-card">

            <p>
                <strong>Korean</strong>
            </p>

            <h2>
                ${data.korean}
            </h2>

            <p>
                <strong>Pronunciation</strong><br>
                ${data.pronunciation}
            </p>

            <p>
                <strong>Meaning</strong><br>
                ${data.meaning}
            </p>

            <button onclick="copyPhrase('${data.korean}')">
                📋 Copy
            </button>

        </div>

    `;
}


// Copy language phrase

function copyPhrase(phrase) {

    if (navigator.clipboard) {

        navigator.clipboard.writeText(phrase);

        alert("Phrase copied!");

    } else {

        alert("Copy is not supported by this browser.");

    }
}

// ========================================
// GEMINI AI ASSISTANT
// ========================================

async function sendMessage() {

    const input = document.getElementById("user-question");
    const chatBox = document.getElementById("chat-box");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    // Show user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = question;

    chatBox.appendChild(userMessage);

    input.value = "";

    // Show loading
    const loadingMessage = document.createElement("div");
    loadingMessage.className = "ai-message";
    loadingMessage.textContent = "Thinking...";

    chatBox.appendChild(loadingMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question: question
            })

        });

        const data = await response.json();

        loadingMessage.remove();

        if (!response.ok) {
            throw new Error(
                data.error || "AI request failed"
            );
        }

        // Show Gemini response
        const aiMessage = document.createElement("div");

        aiMessage.className = "ai-message";

        aiMessage.textContent = data.answer;

        chatBox.appendChild(aiMessage);

    } catch (error) {

        console.error("AI ERROR:", error);

        loadingMessage.textContent =
            "Sorry, I couldn't connect to Gemini.";

    }

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Press Enter to send
function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}
/*// ========================================
// AI ASSISTANT - DEMO
// ========================================

function sendMessage() {

    const input =
        document.getElementById("user-question");

    const chatBox =
        document.getElementById("chat-box");


    if (!input || !chatBox) {
        return;
    }


    const question =
        input.value.trim();


    if (question === "") {
        return;
    }


    // Create user message

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.textContent =
        question;


    chatBox.appendChild(userMessage);


    // Clear input

    input.value = "";


    // Demo AI response

    setTimeout(function () {

        const aiMessage =
            document.createElement("div");

        aiMessage.className =
            "ai-message";


        aiMessage.textContent =
            getAIResponse(question);


        chatBox.appendChild(aiMessage);


        // Scroll chat to bottom

        chatBox.scrollTop =
            chatBox.scrollHeight;

    }, 700);

}


// Simple demo AI responses

function getAIResponse(question) {

    const text =
        question.toLowerCase();


    if (
        text.includes("university") ||
        text.includes("professor") ||
        text.includes("class")
    ) {

        return "You can check your university information section for academic resources and useful student services.";

    }


    if (
        text.includes("restaurant") ||
        text.includes("food")
    ) {

        return "You can use the Language Assistant to learn useful expressions for restaurants.";

    }


    if (
        text.includes("work") ||
        text.includes("job")
    ) {

        return "The Work section provides basic information and useful workplace communication expressions.";

    }


    if (
        text.includes("house") ||
        text.includes("housing") ||
        text.includes("room")
    ) {

        return "You can check the Housing section for accommodation information and useful expressions.";

    }


    if (
        text.includes("hospital") ||
        text.includes("doctor")
    ) {

        return "The Hospital section provides basic information and useful communication expressions.";

    }


    return "Thanks for your question! The International Student Hub AI Assistant will provide more detailed answers when the AI API is connected.";

}


// Press Enter to send message

function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}
*/

// ========================================
// LOGIN SYSTEM
// ========================================


// Open login window

function openLogin() {

    const modal =
        document.getElementById("login-modal");


    if (modal) {

        modal.style.display =
            "flex";

    }

}


// Close login window

function closeLogin() {

    const modal =
        document.getElementById("login-modal");


    if (modal) {

        modal.style.display =
            "none";

    }

}


// Login

function login() {

    const email =
        document.getElementById("email")
            .value
            .trim();


    const password =
        document.getElementById("password")
            .value
            .trim();


    const university =
        document.getElementById("university")
            .value;


    const message =
        document.getElementById("login-message");


    // Check whether all fields are filled

    if (
        email === "" ||
        password === "" ||
        university === ""
    ) {

        message.textContent =
            "Please fill in all fields.";

        message.style.color =
            "red";

        return;

    }


    // Check email format

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        message.textContent =
            "Please enter a valid email address.";

        message.style.color =
            "red";

        return;

    }


    // Check password length

    if (password.length < 6) {

        message.textContent =
            "Password must be at least 6 characters.";

        message.style.color =
            "red";

        return;

    }


    // Successful demo login

    message.textContent =
        "Login successful! Welcome to International Student Hub.";

    message.style.color =
        "green";


    // Change login button text

    const loginButton =
        document.querySelector(".login-btn");


    if (loginButton) {

        loginButton.textContent =
            "Logged In";

    }


    // Close login window

    setTimeout(function () {

        closeLogin();

    }, 1500);

}


// ========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ========================================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("login-modal");


    if (
        event.target === modal
    ) {

        closeLogin();

    }

});


// ========================================
// PAGE LOADED
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "International Student Hub loaded successfully."
    );

});