"use strict";

const loginmodal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();
// ham hien thi noi dung tren trang home
function displayHome() {
    // neu co ng dung dang nhap thi an login model
    if (userActive) {
        loginmodal.style.display = "none";
        mainContent.style.display = "block";
        // them thong bao welcomeMessage
        welcomeMessage.textContent = `welcome ${userActive.firstname}`;
    } else {
        loginmodal.style.display = "block";
        mainContent.style.display = "none";
    }
}

// bat su kien khi nhan nut logout
btnLogout.addEventListener("click", function() {
    const isLogout = confirm("Ban co muon logout");
    if (isLogout) {
        //gan gia tri useractive la null de thong bao ko co ng dung dang nhap
        userActive = null;
        // cap nhat du lieu localstorage
        saveToStorage("userActive", userActive);
        // hien thi home
        displayHome();
    }
});