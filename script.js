
// ========================================
// INTERNATIONAL STUDENT HUB
// COMPLETE JAVASCRIPT
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
        <div class="university-info">

            <h3>🎓 Welcome to University Information</h3>
            <p>Find useful university resources and information to make your student life easier.</p>

            <hr>

            <h3>📅 1. Academic Calendar</h3>
            <p>Check important academic dates, semester schedules, examination periods and registration dates.</p>
            <a href="https://kscms.ks.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN053" target="_blank" rel="noopener noreferrer">
                View Academic Calendar →
            </a>

            <hr>

            <h3>📚 2. Course Information</h3>
            <p>Access student portal services for academic information, course registration and student records.</p>
            <a href="https://kscms.ks.ac.kr/eng/CMS/MemberMgr/login.do?mCode=MN002" target="_blank" rel="noopener noreferrer">
                Visit Student Portal →
            </a>

            <hr>

            <h3>🏫 3. Campus Facilities</h3>
            <p>Explore campus facilities, library services, IT facilities, sports facilities and student spaces.</p>
            <a href="https://kscms.ks.ac.kr/eng/CMS/SiteMap/SiteMap.do?mCode=MN013" target="_blank" rel="noopener noreferrer">
                Explore Campus Information →
            </a>

            <hr>

            <h3>🤝 4. Student Services</h3>
            <p>International student support includes orientation, visa guidance, counseling, campus-life support and cultural programs.</p>
            <a href="https://kscms.ks.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN062" target="_blank" rel="noopener noreferrer">
                International Student Support →
            </a>

            <hr>

            <h3>🌐 5. Important University Links</h3>
            <ul>
                <li><a href="https://kscms.ks.ac.kr/eng/Main.do" target="_blank" rel="noopener noreferrer">Kyungsung University Website</a></li>
                <li><a href="https://ks.ac.kr/haksa/Main.do" target="_blank" rel="noopener noreferrer">Academic Information</a></li>
            </ul>

        </div>
        `
    },


    work: {
        title: "Work Information",
        text: `
        <div class="university-info">

            <h3>💼 Work Guide for International Students</h3>
            <p>Learn about employment, workplace communication and important work-related information in South Korea.</p>

            <hr>

            <h3>🔎 1. Finding Part-Time Work</h3>
            <p>International students may explore opportunities such as restaurant assistance, office assistance and other permitted student jobs.</p>
            <p>Always check whether your visa allows the work and whether you need immigration permission before starting.</p>

            <hr>

            <h3>📄 2. Required Preparation</h3>
            <ul>
                <li>Passport and Alien Registration Card</li>
                <li>Employment contract</li>
                <li>University confirmation, if required</li>
                <li>Korean language proficiency documents, if required</li>
                <li>Part-time work permission, when required</li>
            </ul>

            <hr>

            <h3>⚖️ 3. Know Your Work Rights</h3>
            <ul>
                <li>Understand your hourly wage.</li>
                <li>Check your working hours.</li>
                <li>Keep a copy of your employment contract.</li>
                <li>Keep records of your working hours and payments.</li>
                <li>Ask for help if wages are unpaid or conditions are unfair.</li>
            </ul>

            <hr>

            <h3>🗣️ 4. Useful Korean Expressions</h3>

            <p>아르바이트를 구하고 있습니다.<br><strong>I am looking for a part-time job.</strong></p>
            <p>시급이 얼마인가요?<br><strong>How much is the hourly wage?</strong></p>
            <p>근무 시간은 어떻게 되나요?<br><strong>What are the working hours?</strong></p>
            <p>월급은 언제 지급되나요?<br><strong>When is the salary paid?</strong></p>

            <hr>

            <h3>🌐 5. Official Work Resources</h3>
            <a href="https://www.studyinkorea.go.kr/" target="_blank" rel="noopener noreferrer">Study in Korea – Employment Information →</a>
            <br>
            <a href="https://www.hikorea.go.kr/" target="_blank" rel="noopener noreferrer">Hi Korea – Immigration Services →</a>

            <p>Immigration Contact Center: 1345<br>Employment and Labor Counseling: 1350</p>

        </div>
        `
    },


    housing: {
        title: "Housing Information",
        text: `
        <div class="university-info">

            <h3>🏠 Housing Guide for International Students</h3>
            <p>Find accommodation, understand Korean rental systems and learn how to prepare for a safe move.</p>

            <hr>

            <h3>🏢 1. Types of Accommodation</h3>

            <p><strong>University Dormitory</strong></p>
            <p>Student accommodation provided by universities, usually located on or near campus.</p>

            <p><strong>Goshiwon (고시원)</strong></p>
            <p>Small private rooms, often with shared facilities.</p>

            <p><strong>Wolse (월세)</strong></p>
            <p>Monthly rent with a deposit and regular rent payments.</p>

            <p><strong>Jeonse (전세)</strong></p>
            <p>A rental system involving a large deposit instead of monthly rent.</p>

            <hr>

            <h3>🔍 2. Finding Accommodation</h3>
            <ul>
                <li>Compare location and transportation.</li>
                <li>Check monthly rent and deposit.</li>
                <li>Ask about maintenance fees and utilities.</li>
                <li>Visit the property before making a decision.</li>
                <li>Check the contract and property ownership.</li>
            </ul>

            <hr>

            <h3>📄 3. Before Signing a Contract</h3>
            <ul>
                <li>Read the complete rental agreement.</li>
                <li>Confirm the landlord's identity.</li>
                <li>Check the property registration information.</li>
                <li>Understand the deposit refund conditions.</li>
                <li>Keep a copy of your signed contract.</li>
            </ul>

            <p>Do not transfer a deposit before verifying the property and contract details. Ask a qualified housing professional for help if anything is unclear.</p>

            <hr>

            <h3>🗣️ 4. Useful Korean Expressions</h3>
            <p>방을 보고 싶습니다.<br><strong>I would like to see the room.</strong></p>
            <p>보증금은 얼마인가요?<br><strong>How much is the deposit?</strong></p>
            <p>관리비가 포함되어 있나요?<br><strong>Are maintenance fees included?</strong></p>
            <p>계약 기간은 얼마나 되나요?<br><strong>How long is the contract period?</strong></p>

            <hr>

            <h3>🌐 5. Official Housing Resources</h3>
            <a href="https://www.easylaw.go.kr/" target="_blank" rel="noopener noreferrer">Easy Law – Housing and Rental Information →</a>
            <br>
            <a href="https://www.gov.kr/" target="_blank" rel="noopener noreferrer">Government24 – Government Services →</a>

            <p>Remember to check the applicable residence reporting requirements when you move.</p>

        </div>
        `
    },


    restaurant: {
        title: "Restaurant Information",
        text: `
        <div class="university-info">

            <h3>🍜 Restaurant Guide for International Students</h3>
            <p>Learn how to order food, understand Korean menus and communicate comfortably at restaurants.</p>

            <hr>

            <h3>🍱 1. Understanding Korean Restaurants</h3>
            <ul>
                <li>Learn common Korean food names.</li>
                <li>Check whether the restaurant offers set meals.</li>
                <li>Look for self-service water and side dishes.</li>
                <li>Check whether payment is made at the table or counter.</li>
                <li>Check whether reservations are required.</li>
            </ul>

            <hr>

            <h3>🥗 2. Food Preferences and Allergies</h3>
            <p>If you have food allergies, dietary restrictions or ingredients you cannot eat, tell the restaurant staff before ordering.</p>
            <p>Some Korean dishes contain meat, seafood, fish broth, eggs, milk or nuts. Always confirm the ingredients with the restaurant.</p>

            <hr>

            <h3>📱 3. Ordering Food</h3>
            <ul>
                <li>Ask for the menu.</li>
                <li>Ask about ingredients.</li>
                <li>Request less spicy food if needed.</li>
                <li>Ask whether takeaway is available.</li>
                <li>Check the price before ordering.</li>
            </ul>

            <hr>

            <h3>🗣️ 4. Useful Korean Expressions</h3>
            <p>메뉴판 주세요.<br><strong>Please give me the menu.</strong></p>
            <p>이 음식은 맵나요?<br><strong>Is this food spicy?</strong></p>
            <p>포장해 주세요.<br><strong>Please pack this for takeaway.</strong></p>
            <p>계산해 주세요.<br><strong>Please bring me the bill.</strong></p>
            <p>저는 채식주의자입니다.<br><strong>I am a vegetarian.</strong></p>
            <p>이 음식에 땅콩이 들어가나요?<br><strong>Does this food contain peanuts?</strong></p>

            <hr>

            <h3>🌐 5. Useful Restaurant Resources</h3>
            <a href="https://english.visitkorea.or.kr/" target="_blank" rel="noopener noreferrer">Visit Korea – Food and Travel Information →</a>
            <br>
            <a href="https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=460&vcontsId=140727" target="_blank" rel="noopener noreferrer">Korean Food Guide →</a>

            <p>Korea Travel Helpline: 1330</p>

        </div>
        `
    },


    hospital: {
        title: "Hospital Information",
        text: `
        <div class="university-info">

            <h3>🏥 Healthcare Guide for International Students</h3>
            <p>Learn how to find medical services and get healthcare support anywhere in South Korea.</p>

            <hr>

            <h3>🩺 1. Finding a Hospital</h3>
            <p>You can visit local clinics, general hospitals and university hospitals depending on your needs.</p>
            <p>Useful tip: Search for 병원 (hospital) or 의원 (clinic) on a Korean map application.</p>

            <hr>

            <h3>💳 2. National Health Insurance (NHIS)</h3>
            <p>International students may be subject to National Health Insurance requirements. Check your eligibility, enrollment status, premiums and coverage.</p>
            <a href="https://www.nhis.or.kr/english/" target="_blank" rel="noopener noreferrer">Visit National Health Insurance Service →</a>

            <hr>

            <h3>🌐 3. Medical Interpretation</h3>
            <p>If you have difficulty communicating in Korean, ask the hospital whether interpretation services are available.</p>
            <p>You can also contact the Korea Tourism interpretation service at 1330 for assistance with general interpretation and information.</p>

            <hr>

            <h3>📄 4. What to Prepare</h3>
            <ul>
                <li>Passport or Alien Registration Card</li>
                <li>Health insurance information</li>
                <li>Appointment details, if applicable</li>
                <li>Any relevant medical documents</li>
            </ul>

            <hr>

            <h3>🗣️ 5. Useful Korean Expressions</h3>
            <p>병원이 어디에 있나요?<br><strong>Where is the hospital?</strong></p>
            <p>예약하고 싶습니다.<br><strong>I would like to make an appointment.</strong></p>
            <p>영어 통역이 가능한가요?<br><strong>Is English interpretation available?</strong></p>

            <hr>

            <h3>🚨 6. Emergency Services</h3>
            <p><strong>119</strong> – Fire and ambulance emergencies.</p>
            <p><strong>1339</strong> – Disease and health-related information from KDCA.</p>
            <a href="https://www.kdca.go.kr/eng/" target="_blank" rel="noopener noreferrer">Visit Korea Disease Control and Prevention Agency →</a>

        </div>
        `
    },


    bank: {
        title: "Banking Information",
        text: `
        <div class="university-info">

            <h3>🏦 Banking Guide for International Students</h3>
            <p>Learn how to manage your money, open a bank account and use banking services in South Korea.</p>

            <hr>

            <h3>💳 1. Opening a Bank Account</h3>
            <p>International students can apply for a Korean bank account. Requirements vary by bank.</p>

            <strong>Commonly requested documents:</strong>
            <ul>
                <li>Passport</li>
                <li>Alien Registration Card (ARC), if available</li>
                <li>Korean phone number</li>
                <li>Proof of residence or other supporting documents, if requested</li>
            </ul>

            <p>Banks may apply additional verification and transaction limits.</p>

            <hr>

            <h3>🏛️ 2. Major Banks in South Korea</h3>
            <ul>
                <li>KB Kookmin Bank</li>
                <li>Shinhan Bank</li>
                <li>Hana Bank</li>
                <li>Woori Bank</li>
                <li>NH NongHyup Bank</li>
                <li>IBK Industrial Bank of Korea</li>
            </ul>

            <hr>

            <h3>📱 3. Mobile Banking</h3>
            <p>Most major Korean banks offer mobile banking applications.</p>
            <ul>
                <li>Check your account balance</li>
                <li>Transfer money</li>
                <li>Check transaction history</li>
                <li>Manage debit card services</li>
            </ul>
            <p>App availability and registration requirements depend on the bank and your verification status.</p>

            <hr>

            <h3>🌏 4. International Money Transfers</h3>
            <p>You may be able to send money from Korea to your home country through bank transfer services.</p>
            <ul>
                <li>Check exchange rates</li>
                <li>Compare transfer fees</li>
                <li>Check transfer processing time</li>
                <li>Prepare recipient bank details</li>
            </ul>

            <hr>

            <h3>🗣️ 5. Useful Korean Expressions</h3>
            <p>계좌를 만들고 싶습니다.<br><strong>I would like to open a bank account.</strong></p>
            <p>체크카드를 만들고 싶습니다.<br><strong>I would like to get a debit card.</strong></p>
            <p>해외 송금하고 싶습니다.<br><strong>I would like to send money overseas.</strong></p>

            <hr>

            <h3>🌐 6. Useful Banking Resources</h3>
            <p>Visit official financial institutions for banking information and guidance.</p>
            <a href="https://www.fss.or.kr/eng/main/main.do" target="_blank" rel="noopener noreferrer">Financial Supervisory Service →</a>
            <br>
            <a href="https://www.kfb.or.kr/eng/" target="_blank" rel="noopener noreferrer">Korea Federation of Banks →</a>

        </div>
        `
    }

};


// ========================================
// SHOW STUDENT INFORMATION
// ========================================

function showInfo(type) {
    const info = information[type];

    if (!info) return;

    const modal = document.getElementById("info-modal");
    const title = document.getElementById("info-title");
    const content = document.getElementById("info-content");

    if (!modal || !title || !content) {
        console.error("Information modal elements are missing.");
        return;
    }

    title.textContent = info.title;
    content.innerHTML = info.text;

    modal.style.display = "flex";
}


// ========================================
// CLOSE INFORMATION POPUP
// ========================================

function closeInfo() {
    const modal = document.getElementById("info-modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// ========================================
// LANGUAGE ASSISTANT
// ========================================

const languageData = {

    University: {
        korean: "교수님, 질문이 있습니다.",
        pronunciation: "Gyosunim, jilmun-i itseumnida.",
        meaning: "Professor, I have a question."
    },

    Restaurant: {
        korean: "메뉴판 주세요.",
        pronunciation: "Menyupan juseyo.",
        meaning: "Please give me the menu."
    },

    Workplace: {
        korean: "오늘 출근해야 하나요?",
        pronunciation: "Oneul chulgeunhaeya hanayo?",
        meaning: "Do I have to come to work today?"
    },

    Housing: {
        korean: "방을 보고 싶습니다.",
        pronunciation: "Bang-eul bogo sipseumnida.",
        meaning: "I would like to see the room."
    },

    Hospital: {
        korean: "예약이 있습니다.",
        pronunciation: "Yeyag-i itseumnida.",
        meaning: "I have an appointment."
    },

    Bank: {
        korean: "계좌를 만들고 싶습니다.",
        pronunciation: "Gyejwareul mandeulgo sipseumnida.",
        meaning: "I would like to open an account."
    }

};


// ========================================
// SELECT LANGUAGE CATEGORY
// ========================================

function selectCategory(category) {

    const categoryNames = {
        university: "University",
        restaurant: "Restaurant",
        workplace: "Workplace",
        housing: "Housing",
        hospital: "Hospital",
        bank: "Bank"
    };

    const selectedCategory = categoryNames[category.toLowerCase()];
    const data = languageData[selectedCategory];

    if (!data) return;

    const content = document.getElementById("language-content");

    if (!content) return;

    content.innerHTML = "";

    const card = document.createElement("div");
    card.className = "phrase-card";

    const label = document.createElement("p");
    label.textContent = "Korean";

    const korean = document.createElement("h2");
    korean.textContent = data.korean;

    const pronunciation = document.createElement("p");
    pronunciation.textContent = "Pronunciation: " + data.pronunciation;

    const meaning = document.createElement("p");
    meaning.textContent = "Meaning: " + data.meaning;

    const copyButton = document.createElement("button");
    copyButton.textContent = "📋 Copy";

    copyButton.addEventListener("click", () => {
        copyPhrase(data.korean);
    });

    card.append(label, korean, pronunciation, meaning, copyButton);

    content.appendChild(card);
}


// ========================================
// COPY LANGUAGE PHRASE
// ========================================

async function copyPhrase(phrase) {
    try {
        await navigator.clipboard.writeText(phrase);
        alert("Phrase copied!");
    } catch (error) {
        console.error("Copy error:", error);
        alert("Copy is not supported by this browser.");
    }
}


// ========================================
// GEMINI AI ASSISTANT
// ========================================

async function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (!input || !chatBox) return;

    const question = input.value.trim();

    if (!question) return;

    if (question.length > 2000) {
        alert("Your question is too long.");
        return;
    }

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = question;

    chatBox.appendChild(userMessage);

    input.value = "";

    const loadingMessage = document.createElement("div");
    loadingMessage.className = "ai-message";
    loadingMessage.textContent = "Thinking...";

    chatBox.appendChild(loadingMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("/api/chat", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        });

        const data = await response.json();

        if (response.status === 401) {
            window.location.replace("/auth.html");
            return;
        }

        if (!response.ok) {
            throw new Error(data.error || "AI request failed.");
        }

        loadingMessage.textContent = data.answer;

    } catch (error) {

        console.error("AI ERROR:", error);

        loadingMessage.textContent =
            "Sorry, I couldn't connect to the AI Assistant. Please try again.";

    }

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ========================================
// PRESS ENTER TO SEND MESSAGE
// ========================================

function handleEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
}


// ========================================
// LOAD LOGGED-IN STUDENT
// ========================================

async function loadStudent() {

    try {

        const response = await fetch("/api/auth/me", {
            credentials: "same-origin"
        });

        if (response.status === 401) {
            window.location.replace("/auth.html");
            return;
        }

        if (!response.ok) {
            throw new Error("Could not load student information.");
        }

        const data = await response.json();

        const welcomeUser = document.getElementById("welcome-user");

        if (welcomeUser && data.student) {
            welcomeUser.textContent = "Welcome, " + data.student.name;
        }

    } catch (error) {

        console.error("Student loading error:", error);

    }

}


// ========================================
// LOGOUT
// ========================================

async function logout() {

    try {

        const response = await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "same-origin"
        });

        if (!response.ok) {
            throw new Error("Logout failed.");
        }

        window.location.replace("/auth.html");

    } catch (error) {

        console.error("Logout error:", error);

        alert("Could not log out. Please try again.");

    }

}


// ========================================
// CLOSE INFORMATION MODAL
// ========================================

window.addEventListener("click", function(event) {

    const infoModal = document.getElementById("info-modal");

    if (event.target === infoModal) {
        closeInfo();
    }

});


// ========================================
// PAGE INITIALIZATION
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    console.log("International Student Hub loaded successfully.");

    loadStudent();

});
