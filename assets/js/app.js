(function(){
    var app = angular.module('store', [ ]);   // Name of the app
    app.controller('StoreController', function(){
        this.products = gems;   // this is a property of our controller.
    });
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });
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
    var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Some gems have hidden qualities beyond their luster. . .',
        canPurchase: true,
        soldOut: false,
        reviews: [
            {
                stars: 5,
                body: "it better a good one",
                author: "sedo.christian@gmail.com",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
        }],
        images : [
            {
            full: 'assets/img/gem1.png',
            thumb: 'assets/img/gem1.png'
            }
        ]
    },
    {
        name: 'Terso Stone',
        price: 6.15,
        description: 'Some gems have hidden qualities beyond their luster. . .',
        canPurchase: true,
        soldOut: false,
        reviews: [
            {
                stars: 5,
                body: "it was a good one",
                author: "sedo.christian@gmail.com",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
        }],
        images : [
            {
            full: 'assets/img/gem2.png',
            thumb: 'assets/img/gem2.png'
            }
        ]
    },
    {
        name: 'Cristal Gem',
        price: 5.75,
        description: 'Some gems have hidden qualities beyond their luster. . .',
        canPurchase: true,
        soldOut: false,
        reviews: [
            {
                stars: 5,
                body: "it great a good one",
                author: "sedo.christian@gmail.com",
                createdOn: 1397490980837
            }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
        }],
        images : [
            {
            full: 'assets/img/gem3.png',
            thumb: 'assets/img/gem3.png'
            }
        ]
    }
    ];
})();



