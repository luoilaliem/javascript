class User {
    //ham khoi tao
    constructor(firstname, lastname, username, password, pageSize = 10, category) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.pageSize = pageSize;
        this.category = category;
    }

    //phuong thuc



}

class Task {
    constructor(task, owner, isDone) {
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}