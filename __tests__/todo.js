/* eslint-disable no-undef */
const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, mas, add, od, dt, dl } = todoList();

describe("Test", () => {
  beforeAll(() => {
    add({
      title: "SUB1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adds", () => {
    
    let length = all.length;

    add({
      title: "Sample",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Complete", () => {
    expect(all[0].completed).toBe(false);
    mas(0);
    expect(all[0].completed).toBe(true);
  });

  test("getting the ods", () => {
    let listOfTodos = od();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("getting the dts", () => {
    let listOfTodos = dt();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("rgetting the dl's", () => {
    let listOfTodos = dl();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
