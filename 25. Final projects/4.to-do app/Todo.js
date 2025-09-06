class TodoApp {



    constructor() {
        this.todos = [];
    }

    addTodo(taskName, time, categories = ["study", "Entertainment", "Personal", "Health", "Learning"]) {
        let task = {
            id: this.todos.length + 1,
            name: taskName,
            time: time,
            categories: categories,
            completed: false,
        }
        this.todos.push(task);
    };

    completeTodo(taskName) {
        const matched = this.todos.find(todo => todo.name === taskName);
        if (matched) {
            matched.completed = true;
            return true;
        }
        else {
            return false;
        }

    };

    removeTodo(taskName) {
        const index = this.todos.findIndex(task => task.name === taskName);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        } else {
            return false;
        }
    };
    
    
    displayTodoList(viewList) {
        let tasksToShow;

        if (viewList === undefined) {
            // no parameter → show all todos
            tasksToShow = this.todos;
        } else {
            // parameter given → show only tasks matching the category
            tasksToShow = this.todos.filter(todo => todo.categories.includes(viewList));
        }

        if (tasksToShow.length === 0) {
            console.log("No tasks found 🥲");
            return;
        }

        tasksToShow.forEach(todo => {
            console.log(`ID: ${todo.id}`);
            console.log(`Name: ${todo.name}`);
            console.log(`Time: ${todo.time}`);
            console.log(`Categories: ${todo.categories.join(", ")}`);
            console.log(`Completed: ${todo.completed}`);
            console.log("............................");
        })
        
    };

    hoursWorked() {
        const totalHours = this.todos.reduce((Sum, todos) => Sum + todos.time, 0);
        return totalHours;
    };

    timeNeeded() {
    const pendingTasks = this.todos.filter(todo => !todo.completed);

    if (pendingTasks.length === 0) {
        return true;
    }

    const taskLeftHours = pendingTasks.reduce((sum, todo) => sum + todo.time, 0);
    return taskLeftHours;
}


    editTodo(taskName, updates = {}) {
            const task = this.todos.find(todo => todo.name === taskName);

        if (!task) {
            return false; // Task nai kono.
            }

            let updated = false;

            // Check updates object and apply changes
        if (updates.name) {
            task.name = updates.name;
            updated = true;
            }

        if (updates.categories) {
            task.categories = updates.categories;
            updated = true;
            }

        if (updates.time) {
            task.time = updates.time;
            updated = true;
            }

            return updated;
    };

    getTodo(searchKey) {

        return this.todos.find(todo => todo.name === searchKey ||
            (todo.categories && todo.categories.includes(searchKey)));
    };

    largestTodo() {
        
        const pending = this.todos.filter(todo => !todo.completed);

        if (pending.length === 0) return undefined;

       
        return pending.reduce((maxTask, current) =>
            current.time > maxTask.time ? current : maxTask
        );
    };

    smallestTodo() {
        const pending = this.todos.filter(todo => !todo.completed);
        if (pending.length === 0) return undefined;

        return pending.reduce((minTask, current) =>
            current.time < minTask.time ? current : minTask
        );
    };

    sortTodos() {
   
    const pending = this.todos.filter(todo => !todo.completed);
    pending.sort((a, b) => b.time - a.time);

        return pending;
    };

    undoTask(taskName) {
    const task = this.todos.find(todo => todo.name === taskName);

    if (task && task.completed) {
      task.completed = false;
      return true;
    }

    return false; 
    };

    completePercentage() {
    const totalTasks = this.todos.length;

    if (totalTasks === 0) return 0; // division by zero avoid

    const completedTasks = this.todos.filter(todo => todo.completed).length;

    const percentage = (completedTasks / totalTasks) * 100;

    return percentage.toFixed(2); // 2 decimal points
    };



    importTodos(jsonString) {
    try {
      const tasks = JSON.parse(jsonString);

      if (!Array.isArray(tasks)) {
        console.error("JSON must be an array of tasks");
        return false;
      }

      tasks.forEach(task => {
        // name and time at least thakte hobe
        if (task.name && task.time !== undefined) {
          this.addTodo(
            task.name,
            task.time,
            task.categories ? task.categories : ["Study", "Entertainment", "Personal", "Health", "Learning"]
          );
        }
      });

      return true; // import successful
    } catch (error) {
      console.error("Invalid JSON:", error.message);
      return false;
    }
    };


    clearAllTodos() {

        this.todos = []; // pura array empty kore dilam
        console.log("All todos have been cleared!");
        
    };

};


// its time for test ...

// Initialize the TodoApp
const app = new TodoApp();

// 1. Add Todos
console.log("\n--- Adding Todos ---");
app.addTodo("Read Book", 2, ["Study"]);
app.addTodo("Exercise", 1, ["Health"]);
app.addTodo("Watch Movie", 3, ["Entertainment"]);
app.addTodo("Meditate", 0.5); // default categories
console.log(app.todos);

// 2. Complete Todos
console.log("\n--- Completing Todo 'Read Book' ---");
console.log(app.completeTodo("Read Book")); // true
console.log(app.completeTodo("NonExistent")); // false

// 3. Undo Todos
console.log("\n--- Undo Todo 'Read Book' ---");
console.log(app.undoTask("Read Book")); // true
console.log(app.undoTask("Exercise")); // false (not completed)

// 4. Remove Todos
console.log("\n--- Remove Todo 'Watch Movie' ---");
console.log(app.removeTodo("Watch Movie")); // true
console.log(app.removeTodo("Unknown")); // false

// 5. Display Todos
console.log("\n--- Display All Todos ---");
app.displayTodoList();

console.log("\n--- Display Todos by Category 'Health' ---");
app.displayTodoList("Health");

console.log("\n--- Display Todos by Category 'Sports' ---");
app.displayTodoList("Sports"); // No tasks

// 6. Hours Worked
console.log("\n--- Hours Worked ---");
console.log(app.hoursWorked()); // sum of all times

// 7. Time Needed
console.log("\n--- Time Needed ---");
console.log(app.timeNeeded()); // sum of incomplete tasks

// 8. Edit Todo
console.log("\n--- Edit Todo 'Exercise' ---");
console.log(app.editTodo("Exercise", { name: "Morning Exercise", time: 2, categories: ["Health", "Fitness"] }));
app.displayTodoList();

// 9. Get Todo
console.log("\n--- Get Todo by Name 'Read Book' ---");
console.log(app.getTodo("Read Book"));

console.log("\n--- Get Todo by Category 'Health' ---");
console.log(app.getTodo("Health"));

// 10. Largest & Smallest Todo
console.log("\n--- Largest Todo ---");
console.log(app.largestTodo());

console.log("\n--- Smallest Todo ---");
console.log(app.smallestTodo());

// 11. Sort Todos
console.log("\n--- Sort Todos by Time Desc ---");
console.log(app.sortTodos());

// 12. Complete Percentage
console.log("\n--- Complete Percentage ---");
app.completeTodo("Read Book");
console.log(app.completePercentage()); // percentage of completed tasks

// 13. Import Todos
console.log("\n--- Import Todos ---");
const jsonString = '[{"name":"Study JS","time":2,"categories":["Study"]},{"name":"Yoga","time":1}]';
console.log(app.importTodos(jsonString));
app.displayTodoList();

// 14. Clear All Todos
console.log("\n.......Clear All Todos......😒 ");
app.clearAllTodos();
app.displayTodoList();
