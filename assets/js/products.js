(function(){

                // this app var we are going to sent to the 'store' the app module (Principal)
    var app = angular.module('store-products', [ ]);   // Name of the Module
    
    app.directive('productPanels', function(){
        return{
            restrict: 'E',         
            templateUrl: 'partials/product-panels.html',
            controller: function(){
                // this.tab = 1;
                this.selectTab = function(setTab){
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });
    
    app.directive('productTitle', function(){
        return{
            restrict:'E',
            templateUrl:'partials/product-title.html'
        };
    });

    app.directive('productGallery', function(){
        return{
            restrict:'E',
            templateUrl:'partials/product-gallery.html'
        }
    });
})();



