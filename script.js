
// تغيير اللغة
document.getElementById('language').addEventListener('change', function () {
    let selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

// دالة لتغيير اللغة
function changeLanguage(language) {
    if (language === 'en') {
        document.body.dir = "ltr";
        updateText("Naho Al Qimmah", "Unleash your potential with Naho Al Qimmah");
    } else {
        document.body.dir = "rtl";
        updateText("نحو القمة", "أطلق العنان لإمكاناتك مع نحو القمة");
    }
}

// دالة لتحديث النصوص في الصفحة
function updateText(headerText, subHeaderText) {
    document.querySelector('h1').textContent = headerText;
    document.querySelector('h2').textContent = subHeaderText;
}

// تسجيل الدخول الوهمي
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    login(username, password);
});

// دالة لتسجيل الدخول
function login(username, password) {
    if (username === "admin" && password === "password") {
        alert("تسجيل الدخول ناجح!"); // نص تأكيد
        // هنا يمكن إضافة المزيد من الإجراءات بعد تسجيل الدخول الناجح
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة."); // نص خطأ
    }
}
