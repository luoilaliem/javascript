'use strict'
if (userActive) {
    const todoList = document.getElementById("todo-list");
    const btnAdd = document.getElementById("btn-add");
    const inputTask = document.getElementById("input-task");
    displayTodoList();

    // ham hien thi todo
    function displayTodoList() {
        let html = "";
        todoArr.filter((todo) => todo.owner === userActive.username).forEach(function(todo) {
            html += `
            <li class=${todo.isDone ? "checked" : ""} >
            ${todo.task}<span class="close">×</span>
            </li>
            `;
        });
        todoList.innerHTML = html;
        //bat cac su kien
        eventToggleTasks();
        eventDeleteTasks();
    }
    btnAdd.addEventListener("click", function() {
        if (inputTask.value.trim().length === 0) {
            alert("vui long nhap nhiem vu");
        } else {
            const todo = new Task(inputTask.value, userActive.username, false);

            todoArr.push(todo);
            saveToStorage("todoArr", todoArr);
            displayTodoList();
            inputTask.value = "";
        }
    });
    // ham bat su kien toggle task
    function eventToggleTasks() {
        //lay tat ca cacs phan tu li chua thong tin task va bat sk click
        document.querySelectorAll("#todo-list li").forEach(function(liEl) {
            liEl.addEventListener("click", function(e) {
                if (e.target !== liEl.children[0]) {

                    liEl.classList.toggle("checked");

                    const todo = todoArr.find(
                        (todoItem) => todoItem.owner === userActive.username &&
                        todoItem.task === liEl.textContent.slice(0, -1)
                    );
                    // sau do doi thuoc tinh isDone cua no
                    todo.isDone = liEl.classList.contains("checked") ? true : false;

                    saveToStorage("todoArr", todoArr);
                }
            });
        });
    }

    //
    function eventDeleteTasks() {
        document.querySelectorAll("#todo-list .close").forEach(function(closeEl) {
            closeEl.addEventListener("click", function() {
                const isDelete = confirm("ban co muon xoa khong");
                if (isDelete) {
                    const index = todoArr.findIndex(
                        (todoItem) => todoItem.owner === userActive.username &&
                        todoItem.task === closeEl.textContent.slice(0, -1)
                    );
                    //xoa khoi mang
                    todoArr.splice(index, 1);
                    saveToStorage("todoArr", todoArr);
                    displayTodoList();
                }
            });
        });
    }
} else {
    alert("vui long dang nhap/ dang ky");
    window.location.href = '../index.html';

}