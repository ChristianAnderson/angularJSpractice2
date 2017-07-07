(function(){
    var app = angular.module('store', ['store-products']);   // Name of the app
    
    app.controller('StoreController',['$http', function($http){
        
        var store = this;
        store.products = [];

        // $http.get('products.json')
        //     .then(function (response){
        //     var data = response.data,
        //         status = response.status;
        //         // statusText = response.statusText,
        //         // headers = response.headers,
        //         // config = response.config;

        //         store.products = data;
        //         console.log(data);

        // });

        $http.get('assets/js/products.json').
            then(function onSuccess(response) {
                // Handle success
                var data = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                
                store.products = data;
                console.log(data);
            }).
            catch(function onError(response) {
                // Handle error
                var data = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;
                
                console.log(status);
            });

    }]);
    
    // Function to Add a new Review
    app.controller('ReviewController', function(){
        //We create the review property object
        this.review = {};
        
        //Create the other property createdOn
        this.review.createdOn = Date.now();
        // we create the function addReview to receipt the actual product we are working on
        this.addReview = function(product){
            //We push the actual product(this).review on the reviews Array
            product.reviews.push(this.review);
            //we clean the form
            this.review = {};
        };
    });
    
    
})();



