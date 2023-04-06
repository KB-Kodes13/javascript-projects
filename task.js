let taskManager = (function() {
    let tasks = []; 
  
    //This is a function to add task tot the task array
    function addTask(taskDescription) {
      tasks.push(taskDescription);
    }
  
    // This defines the function displayTasks that logs all tasks in the tasks array to the console.
    function displayTasks() {
      //the forEach method iterates over each task in the tasks array.
      tasks.forEach(function(task) {
        // For each task, log the task description to the console.
        console.log(task);
      });
    }
  
    // This return an object with the addTask and displayTasks functions, making them available outside of the IIFE.
    return {
      addTask: addTask,
      displayTasks: displayTasks
    };
  })();
  
  // Add three sample tasks using the taskManager's addTask function.
  taskManager.addTask('take out the trash');
  taskManager.addTask('meal prep for the week');
  taskManager.addTask('Wash the pollen off of the car');
  
  // Use the taskManager to display the list of tasks.
  taskManager.displayTasks();
  