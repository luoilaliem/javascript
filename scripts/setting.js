'use strict'


if (userActive) {
    const inputPageSize = document.getElementById("input-page-size");
    const inputCategory = document.getElementById("input-category");
    const btnSubmit = document.getElementById("btn-submit");

    btnSubmit.addEventListener("click", function() {
        if (validate()) {
            // cap nhat lai userActive
            userActive.pageSize = Number.parseInt(inputPageSize.value);
            userActive.category = inputCategory.value;
            saveToStorage("userActive", userActive);

            // cap nhat mang userArr
            const index = userArr.findIndex(
                (userItem) => userItem.username === userActive.username
            );
            userArr[index] = userActive;
            saveToStorage("userArr", userArr);

            // reset ;aij form nhap va thong baop thanh cong
            alert("cai dat thanh cong");
            inputPageSize.value = "";
            inputCategory.value = "General";
        }
    });

    //validate
    function validate() {
        let isValidate = true;

        if (Number.isNaN(Number.parseInt(inputPageSize.value))) {
            alert("news per page khong hop le");
            isValidate = false;
        }
        return isValidate;
    }
} else {
    alert("vui long dang nhap/dang ky");
    window.location.href = '../index.html';
}