const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

document.getElementById("showLogin").onclick = () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
};

document.getElementById("showRegister").onclick = () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
};

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = regName.value.trim();
    const email = regEmail.value.trim();
    const password = regPassword.value.trim();
    const confirmPassword = regConfirmPassword.value.trim();

    if (!name || !email || !password || !confirmPassword) {
        message.innerText = "All fields are required";
        return;
    }

    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        return;
    }

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match";
        return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    message.innerText = "Registration successful! Please login.";
    registerForm.reset();
});

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        message.innerText = "No user found. Please register.";
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "home.html";
    } else {
        message.innerText = "Invalid email or password";
    }
});

