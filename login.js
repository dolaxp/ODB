document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginErrorDiv = document.getElementById("loginError");

    // --- بيانات الاعتماد (مستخدمين متعددين) ---
    const users = {
        "admin": "admin",
        "khaled": "123123123",
        "manga": "123123123",
        "Abdo1994": "0567014549",
        "Atta": "091991",
        "sadek": "123123123",
        "3rgany": "123123123",
        "taleb": "123123123",
        "3asem": "123123123",
    };
    // -------------------------------------------

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // منع إرسال النموذج

        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        loginErrorDiv.textContent = ""; // مسح رسالة الخطأ

        if (users[enteredUsername] && users[enteredUsername] === enteredPassword) {
            // تسجيل الدخول ناجح
            window.location.href = "main.html"; 
        } else {
            // تسجيل الدخول فشل
            loginErrorDiv.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";

            const loginContainer = document.querySelector('.login-container');
            if (loginContainer) {
                loginContainer.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    loginContainer.style.animation = '';
                }, 500);
            }
        }
    });
});

// CSS لهز النموذج عند الخطأ
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}
`;
document.head.appendChild(style);
