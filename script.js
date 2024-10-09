// تغيير اللغة
document.getElementById('language').addEventListener('change', function () {
    let selectedLanguage = this.value;
    if (selectedLanguage === 'en') {
        document.body.dir = "ltr";
        document.querySelector('h1').textContent = "Naho Al Qimmah";
        document.querySelector('h2').textContent = "Unleash your potential with Naho Al Qimmah";
    } else {
        document.body.dir = "rtl";
        document.querySelector('h1').textContent = "نحو القمة";
        document.querySelector('h2').textContent = "أطلق العنان لإمكاناتك مع نحو القمة";
    }
});

// تسجيل الدخول الوهمي
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username === "admin" && password === "password") {
        alert