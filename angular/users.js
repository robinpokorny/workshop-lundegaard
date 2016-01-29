

angular
  .module('app')
  .factory('users', users);

function users() {
  var _users = ['Lunde', 'Marek', 'Jágr'];
  var service = {
    getAll: getAll
  };
  return service;

  ////////////

  function getAll() {
    return _users;
  }
}