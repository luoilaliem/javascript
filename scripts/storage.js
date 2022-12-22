// ham lay du lieu
function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// ham luu du lieu
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
// lay du lieu userArr
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];

// chuyen doi ve dang instance
const userArr = users.map((user) => parseUser(user));

// lay du lieu user dang nhap
let userActive = getFromStorage("userActive") ? parseUser(getFromStorage("userActive")) : null;

// lay du lieu todo
let todos = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
// chuyen doi ve dang class instance
const todoArr = todos.map((todo) => parseTask(todo));

// ham chuyen doi tu js object sang class instance
function parseUser(userData) {
    const user = new User(userData.firstname, userData.lastname, userData.username, userData.password, userData.pageSize, userData.category);

    return user;
}
// ham chuyen doi tu js object sang class instance cua task
function parseTask(taskData) {
    const task = new Task(taskData.task, taskData.owner, taskData.isDone);

    return task;
}