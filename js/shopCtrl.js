angular.module('assessment')
.controller('shopCtrl', function($scope, shopService) {
  shopService.getProducts().then((res) => {
    console.log(res);
    $scope.products = res
  })
  $scope.show = false;
})
