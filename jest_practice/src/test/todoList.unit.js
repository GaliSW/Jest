const TodoList = require("./todoList");

test("代辦事項流程測試", () => {
    //Arrange
    const todo = new TodoList();
    const expected = ["task1"];

    //Action
    todo.addTodo("task1");

    //Assert
    expect(todo.getList()).toEqual(expected);
});
