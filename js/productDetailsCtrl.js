angular.module('assessment')
.controller('productDetailsCtrl', function($scope, $stateParams, shopService) {
  var id = $stateParams.id
  console.log(id);
  shopService.getProductId(id)
  .then((res) => {
    console.log(res);
    $scope.p = res
  })
})
