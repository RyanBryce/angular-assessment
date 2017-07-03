angular.module('assessment')
.directive('wowProduct', function () {
  return {
    restrict: 'E',
    templateUrl: './views/product-tmpl.html',
    scope: {
      p: '='
    },
    controller: function ($scope) {
      $scope.show = true
    }
  }
})
