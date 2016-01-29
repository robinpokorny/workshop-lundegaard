
angular
    .module('app', ['ngSanitize']);

angular
  .module('app')
  .controller('MainController', MainController);

MainController.$inject = ['users', '$http']

function MainController(users) {
  var vm = this;

  vm.names = users.getAll();
  vm.danger = 'a<h1>alert(1)</h1>';

}