angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {

    $scope.title = "Todo App"
    $scope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false},
      {text:'sdfsd sdfdsfsd', done:false},
      {text:'Carleen Gansen', done:true},
      {text:'Lorem ipsum dolor.', done:false},
      {text:'Judith Pembroke', done:true},
      {text:'Lawanna Morter', done:false}
    ];

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });

      // $scope.todos = $scope.todos.filter( function(todo) {
      //   return !todo.done;
      // } );

    };
  });