class TodoList {
    constructor() {
        this.todoList = [];
    }

    getList() {
        return this.todoList;
    }

    addTodo(task) {
        this.todoList.push(task);
    }
}

module.exports = TodoList;
