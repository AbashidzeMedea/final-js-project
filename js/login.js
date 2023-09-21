document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem('token', token);
                document.getElementById("loginFormContainer").style.display = "none";
                document.querySelector(".categories-container").style.display = "flex";
                document.querySelector(".button-div").style.display = "flex";

            } else {
                console.error("Login failed");
                alert("incorrect login or password");
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    });
});

