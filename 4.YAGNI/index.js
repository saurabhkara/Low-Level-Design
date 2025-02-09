class TodoApp {
  constructor() {
    this.tasks = [];
    this.sortTasks(); // Sorting tasks before it's even necessary
  }

  addTask(task) {
    this.tasks.push(task);
  }

  // Prematurely added sorting logic
  sortTasks() {
    this.tasks.sort((a, b) => a.localeCompare(b));
  }

  render() {
    console.log(this.tasks);
  }
}

const app = new TodoApp();
app.addTask("Buy groceries");
app.addTask("Walk the dog");
app.render();

// Good Example (Following YAGNI)

class TodoApp1 {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  render() {
    console.log(this.tasks);
  }
}

const app1 = new TodoAp1p();
app1.addTask("Buy groceries");
app1.addTask("Walk the dog");
app1.render();
