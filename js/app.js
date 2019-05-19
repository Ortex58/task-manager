//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0];//first-button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//complete-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");

    //input (checkbox)
    var checkBox = document.createElement("input");
    //label
    var label = document.createElement("label");
    //input (text)
    var editInput = document.createElement("input");
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");
    
    //Each elements, needs modifying

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    label.innerText = taskString;

    //Each elements, needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}
//Add a new task
var addTask = function() {
  console.log("Add task...");
  //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  //Append listItem to incompleteTasksHolder
  if(!taskInput.value.trim() == "") { //Reject to traverse the value from input(new task) to incompleteTasksHolder if it's empty or even white space
    incompleteTasksHolder.appendChild(listItem);
    taskInput.value = "";
  }
  else {
    taskInput.placeholder = "Type a task...";
  }

  bindTaskEvents(listItem, taskCompleted);
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");
    //if the class of the parent is .editMode
    if(containsClass) {
      //Switch from .editMode
      //label text become the input's value (I think it is wrong; input value becomes label text)
      label.innerText = editInput.value;
    }
    else {
      //Switch to .editMode
      //input value becomes the label's text (I think it is wrong; label's text becomes input value)
      editInput.value = label.innerText;
    }

    //Toggle .editMode on the list item
    listItem.classList.toggle("editMode");

}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  //Remove the parent list item from the <ul>
  ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  //Append the task list item to the #completed-tasks
  var listItem = this.parentNode; //'this' represents 'input(checkbox)'
  completedTasksHolder.appendChild(listItem); //You could write this as well and omit the line right above: completedTasksHolder.appendChild(this.parentNode);
  bindTaskEvents(listItem, taskIncomplete);
}
 //Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //Append the task list item to the #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkbox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

    //bind editTask to edit button
  editButton.onclick = editTask;
    //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to checkbox
  checkbox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
var ajaxRequest = function() {
  console.log("AJAX request");
}

addButton.addEventListener("click", ajaxRequest);
addButton.addEventListener("click", addTask);

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completeTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}



