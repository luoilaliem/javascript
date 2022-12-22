const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

// bat su kien click vao nut login
btnSubmit.addEventListener("click", function() {
    const isValidate = validate();
    if (isValidate) {
        const user = userArr.find(
            (item) => item.username === inputUsername.value && item.password === inputPassword.value

        );
        if (user) {
            alert("dang nhap thanh cong");
            saveToStorage("userActive", user);
            window.location.href = '../index.html';
        } else {
            alert("thong tin dang nhap khong chinh xac");
        }
    }
});

// validate du lieu nhap vao 
function validate() {
    let isValidate = true;
    if (inputUsername.value === "") {
        alert("chua nhap username");
        isValidate = false;
    }
    if (inputPassword.value === "") {
        alert("chua nhap password");
        isValidate = false;
    }
    return isValidate;
}