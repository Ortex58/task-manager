<!DOCTYPE html>
<html>
  <head>
    <title>Todo App</title>
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8">    
  </head>
  <body>
<!--     <style>
      #logout {
  width: 25px;
  height: 10px;
  margin: 0 auto;
  color: black;
}
    </style> -->
    
    <div class="container">
      <p>
        <label for="logout"></label> <br><a id="logout" href="index.php?logout='1'" style="color: red;">Logout</a>
      </p>
      <label for="new-task">Add task</label><input id="new-task" type="text"><button>Add</button>
      </p>
      
      <h3>Yuo must do</h3>
      <ul id="incomplete-tasks">
        <li><input type="checkbox"><label>Play chess</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>
        <li class="editMode"><input type="checkbox"><label>Go Shopping</label><input type="text" value="Go Shopping"><button class="edit">Edit</button><button class="delete">Delete</button></li>
        
      </ul>
      
      <h3>Completed</h3>
      <ul id="completed-tasks">
        <li><input type="checkbox" checked><label>see the weather</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>
      </ul>
    </div>

    <script type="text/javascript" src="js/app.js"></script>

  </body>
</html>