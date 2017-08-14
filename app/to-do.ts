//declaring Class
class Task {
  done: boolean;
  description: string;
  priority: string;

//declaring Constructor
constructor(public descriptionParameter: string, public priorityParameter: string) {
this.done = false;
//add public keyword and remove this. from the Constructor
// this.description = descriptionParameter;
// this.priority = priorityParameter;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'medium'));
console.log(tasks);
