angular.module('assessment')
.service('shopService', function($http) {
  this.getProducts = () => {
    return $http({
      method: "GET",
      url: 'https://practiceapi.devmountain.com/products'
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
  }
  this.getProductId = (id) => {
    return $http({
      method: "GET",
      url: 'https://practiceapi.devmountain.com/products/' + id
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
  }

})
