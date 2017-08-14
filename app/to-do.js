//declaring Class
var Task = (function () {
    //declaring Constructor
    function Task(descriptionParameter, priorityParameter) {
        this.done = false;
        this.description = descriptionParameter;
        this.priority = priorityParameter;
    }
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'medium'));
console.log(tasks);
