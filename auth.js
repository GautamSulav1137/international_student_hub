
// ========================================
// INTERNATIONAL STUDENT HUB
// AUTHENTICATION JAVASCRIPT
// ========================================


// ========================================
// SHOW LOGIN
// ========================================

function showLogin() {

    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("register-form").classList.add("hidden");

    document.getElementById("login-tab").classList.add("active");
    document.getElementById("register-tab").classList.remove("active");

}


// ========================================
// SHOW REGISTER
// ========================================

function showRegister() {

    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.remove("hidden");

    document.getElementById("register-tab").classList.add("active");
    document.getElementById("login-tab").classList.remove("active");

}


// ========================================
// DISPLAY MESSAGE
// ========================================

function showMessage(elementId, message, success = false) {

    const element = document.getElementById(elementId);

    if (!element) return;

    element.textContent = message;
    element.style.color = success ? "green" : "red";

}


// ========================================
// CHECK EXISTING LOGIN
// ========================================

async function checkLogin() {

    try {

        const response = await fetch("/api/auth/me", {
            credentials: "same-origin"
        });

        if (response.ok) {
            window.location.replace("/app.html");
        }

    } catch (error) {

        console.error("Login check error:", error);

    }

}


// ========================================
// LOGIN FORM
// ========================================

document.getElementById("login-form").addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    const button = this.querySelector('button[type="submit"]');

    if (button) button.disabled = true;

    showMessage("login-message", "Logging in...", true);

    try {

        const response = await fetch("/api/auth/login", {

            method: "POST",

            credentials: "same-origin",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Login failed.");
        }

        showMessage("login-message", "Login successful! Redirecting...", true);

        window.location.replace("/app.html");

    } catch (error) {

        console.error("Login error:", error);

        showMessage("login-message", error.message);

        if (button) button.disabled = false;

    }

});


// ========================================
// REGISTRATION FORM
// ========================================

document.getElementById("register-form").addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const university = document.getElementById("register-university").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const button = this.querySelector('button[type="submit"]');

    if (password.length < 8) {

        showMessage("register-message", "Password must contain at least 8 characters.");

        return;

    }

    if (password !== confirmPassword) {

        showMessage("register-message", "Passwords do not match.");

        return;

    }

    if (button) button.disabled = true;

    showMessage("register-message", "Creating your account...", true);

    try {

        const response = await fetch("/api/auth/register", {

            method: "POST",

            credentials: "same-origin",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                university: university,
                password: password
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Registration failed.");
        }

        document.getElementById("register-form").reset();

        showLogin();

        document.getElementById("login-email").value = email;

        showMessage(
            "login-message",
            "Account created successfully! Please log in.",
            true
        );

    } catch (error) {

        console.error("Registration error:", error);

        showMessage("register-message", error.message);

    } finally {

        if (button) button.disabled = false;

    }

});


// ========================================
// INITIALIZATION
// ========================================

checkLogin();

