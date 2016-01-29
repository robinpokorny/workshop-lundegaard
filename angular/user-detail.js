

angular
  .module('app')
  .directive('userDetail', userDetail);

function userDetail(users) {
  var danger = 'a<script>alert(1)</script>'

  var service = {
    template: '<h2>Ahoj, {{ danger }}!</h2>'
  };
  return service;
}