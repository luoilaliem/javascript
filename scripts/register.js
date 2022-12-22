// var userArr = [];
const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

// bat su kien click vao nut register
btnSubmit.addEventListener("click", function() {
    const user = new User(
        inputFirstname.value, inputLastname.value, inputUsername.value, inputPassword.value
    );
    //check validate
    const isValidate = validate(user);
    if (validate) {
        // them user vao mang userArr
        userArr.push(user);
        saveToStorage("userArr", userArr);
        alert("dang ky thanh cong");

        // dieu huong sang trang login
        window.location.href = '../pages/login.html';
    }
});
// ham validate
function validate(user) {
    let isValidate = true;
    // khong truongn nao bi bo trong
    if (user.firstname.trim().length === 0) {
        alert("chua nhap firstname");
        isValidate = false;
    }
    if (user.lastname.trim().length === 0) {
        alert("chua nhap lastname");
        isValidate = false;
    }
    if (user.username.trim().length === 0) {
        alert("chua nhap username");
        isValidate = false;
    }
    if (user.password === "") {
        alert("chua nhap password");
        isValidate = false;
    }
    if (inputPasswordConfirm.value === "") {
        alert("chua nhap passwordconfirm");
        isValidate = false;
    }
    //Username không được trùng với Username của các người dùng trước đó.
    // if (!userArr.every(item) => (item.username !== user.username ? true : false)) {
    //     alert("username da ton tai");
    //     isValidate = false;
    // }
    // cach khac
    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].username === user.username) {
            alert("username da ton tai");
            isValidate = false;
        }
    }
    //Password và Confirm Password phải giống nhau.
    if (user.password !== inputPasswordConfirm.value) {
        alert("password va confirm password phai giong nhau");
        isValidate = false;
    }
    //Password phải có nhiều hơn 8 ký tự.
    if (user.password.length <= 8) {
        alert("mat khau phai co nhieu hon 8 ky tu");
        isValidate = false;
    }
    return isValidate;
}