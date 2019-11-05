var lunrIndex, pagesIndex, $results;

function initLunr() {
    pagesIndex =
        [
            {
                "id": "miso-soup",
                "name": "Miso Soup",
                "description": "Soy bean paste and seaweed soup.",
                "price": "1.75",
                "image": "images/appetizers/miso_soup.jpg"
            },
            {
                "id": "edamame-app",
                "name": "Edamame",
                "description": "Boiled soy beans.",
                "price": "3.45",
                "image": "images/appetizers/edamame.jpg"
            },
            {
                "id": "gomae-salad",
                "name": "Gomae Salad",
                "description": "Boiled spinach with goma sauce dressing and sprinkled sesame.",
                "price": "4.45",
                "image": "images/appetizers/gomae_salad.jpg"
            },
            {
                "id": "wakame-salad",
                "name": "Wakame Salad",
                "description": "Seasoned seaweed with sprinkled sesame.",
                "price": "4.95",
                "image": "images/appetizers/wakame_salad.jpg"
            },
            {
                "id": "gyoza-app",
                "name": "Gyoza (6 pieces)",
                "description": "Dumplings filled with ground pork and vegetables.",
                "price": "4.95",
                "image": "images/appetizers/gyoza.jpg"
            },
            {
                "id": "shrimp-tempura",
                "name": "Shrimp Tempura (8 pieces)",
                "description": "Deep fried black tiger shrimp with tempura sauce.",
                "price": "8.95",
                "image": "images/appetizers/shrimp_tempura.jpg"
            },
            {
                "id": "yam-tempura",
                "name": "Yam Tempura (8 pieces)",
                "description": "Deep fried sliced yams with honey garlic dip.",
                "price": "8.95",
                "image": "images/appetizers/yam_tempura.jpg"
            },
            {
                "id": "alaska-roll",
                "name": "Alaska Roll (6 pieces)",
                "description": "Avocado, salmon and mayo.",
                "price": "5.45",
                "image": "images/rolls/alaska_roll.jpg"
            },
            {
                "id": "avocado-roll",
                "name": "Avocado Roll (6 pieces)",
                "description": "Avocado and mayo.",
                "price": "3.95",
                "image": "images/rolls/avocado_roll.jpg"
            },
            {
                "id": "california-roll",
                "name": "California Roll (6 pieces)",
                "description": "Avocado, cucumber, crab meat and fish eggs.",
                "price": "4.95",
                "image": "images/rolls/california_roll.jpg"
            },
            {
                "id": "crazy-roll",
                "name": "Crazy Roll (6 pieces)",
                "description": "Cooked shrimp, octopus, yellow tail, fish eggs and mayo.",
                "price": "6.45",
                "image": "images/rolls/crazy_roll.jpg"
            },
            {
                "id": "kamikaze-roll",
                "name": "Kamikaze Roll (6 pieces)",
                "description": "Red tuna, fish eggs, mayo, green onion, hot sauce and cucumber.",
                "price": "6.45",
                "image": "images/rolls/kamikaze_roll.jpg"
            },
            {
                "id": "philadelphia-roll",
                "name": "Philadelphia Roll (6 pieces)",
                "description": "Avocado, cucumber, salmon, cream cheese and mayo.",
                "price": "5.95",
                "image": "images/rolls/philadelphia_roll.jpg"
            },
            {
                "id": "red-tuna-roll",
                "name": "Red Tuna Roll (6 pieces)",
                "description": "Red tuna and wasabi.",
                "price": "4.95",
                "image": "images/rolls/red_tuna_roll.jpg"
            },
            {
                "id": "salmon-roll",
                "name": "Salmon Roll (6 pieces)",
                "description": "Salmon and wasabi.",
                "price": "4.95",
                "image": "images/rolls/salmon_roll.jpg"
            },
            {
                "id": "shiitake-roll",
                "name": "Shiitake Roll (6 pieces)",
                "description": "Shiitake mushroom and mayo.",
                "price": "3.95",
                "image": "images/rolls/shiitake_roll.jpg"
            },
            {
                "id": "spider-roll",
                "name": "Spider Roll (6 pieces)",
                "description": "Deep fried soft shell crab, avocado and fish eggs.",
                "price": "6.95",
                "image": "images/rolls/spider_roll.jpg"
            },
            {
                "id": "bbq-eel-nigiri",
                "name": "BBQ Eel Nigiri (2 pieces)",
                "description": "Cooked eel over pressed vinegared rice.",
                "price": "4.45",
                "image": "images/nigiri/bbq_eel_nigiri.jpg"
            },
            {
                "id": "flying-fish-roe-nigiri",
                "name": "Flying Fish Roe Nigiri (2 pieces)",
                "description": "Flying fish roe eggs over pressed vinegared rice.",
                "price": "4.45",
                "image": "images/nigiri/flying_fish_roe_nigiri.jpg"
            },
            {
                "id": "octopus-nigiri",
                "name": "Octopus Nigiri (2 pieces)",
                "description": "Octopus over pressed vinegared rice.",
                "price": "4.45",
                "image": "images/nigiri/octopus_nigiri.jpg"
            },
            {
                "id": "red-snapper-nigiri",
                "name": "Red Snapper Nigiri (2 pieces)",
                "description": "Red snapper over pressed vinegared rice.",
                "price": "4.45",
                "image": "images/nigiri/red_snapper_nigiri.jpg"
            },
            {
                "id": "red-tuna-nigiri",
                "name": "Red Tuna Nigiri (2 pieces)",
                "description": "Red tuna over pressed vinegared rice.",
                "price": "4.45",
                "image": "images/nigiri/red_tuna_nigiri.jpg"
            },
            {
                "id": "salmon-nigiri",
                "name": "Salmon Nigiri (2 pieces)",
                "description": "Salmon over pressed vinegared rice.",
                "price": "4.45",
                "image": "images/nigiri/salmon_nigiri.jpg"
            },
            {
                "id": "pink-tuna-sashimi",
                "name": "Pink Tuna Sashimi (3 pieces)",
                "description": "Thin slices of pink tuna.",
                "price": "4.95",
                "image": "images/sashimi/pink_tuna_sashimi.jpg"
            },
            {
                "id": "red-tuna-sashimi",
                "name": "Red Tuna Sashimi (3 pieces)",
                "description": "Thin slices of red tuna.",
                "price": "5.95",
                "image": "images/sashimi/red_tuna_sashimi.jpg"
            },
            {
                "id": "salmon-sashimi",
                "name": "Salmon Sashimi (3 pieces)",
                "description": "Thin slices of salmon.",
                "price": "4.95",
                "image": "images/sashimi/salmon_sashimi.jpg"
            },
            {
                "id": "white-tuna-sashimi",
                "name": "White Tuna Sashimi (3 pieces)",
                "description": "Thin slices of white tuna.",
                "price": "4.95",
                "image": "images/sashimi/white_tuna_sashimi.jpg"
            },
            {
                "id": "bbq-eel-don",
                "name": "BBQ Eel Don",
                "description": "Rice topped with BBQ eel, fish eggs, cucumber, green onions, teriyaki sauce, sesame and seasoning.",
                "price": "14.95",
                "image": "images/donburi/bbq_eel_don.jpg"
            },
            {
                "id": "chirashi-don",
                "name": "Chirashi Don",
                "description": "Rice topped with assorted sashimi, fish eggs, cucumber, green onions, teriyaki sauce, sesame and seasoning.",
                "price": "15.95",
                "image": "images/donburi/chirashi_don.jpg"
            },
            {
                "id": "red-tuna-don",
                "name": "Red Tuna Don",
                "description": "Rice topped with red tuna, fish eggs, cucumber, green onions, teriyaki sauce, sesame and seasoning.",
                "price": "13.95",
                "image": "images/donburi/red_tuna_don.jpg"
            },
            {
                "id": "salmon-don",
                "name": "Salmon Don",
                "description": "Rice topped with salmon, fish eggs, cucumber, green onions, teriyaki sauce, sesame and seasoning.",
                "price": "13.95",
                "image": "images/donburi/salmon_don.jpg"
            },
            {
                "id": "okonomiyaki",
                "name": "Okonomiyaki",
                "description": "Savory pancake made with any number of ingredients.",
                "price": "6.95",
                "image": "images/daily_specials/okonomiyaki.jpg"
            },
            {
                "id": "ramen",
                "name": "Ramen",
                "description": "Pork noodle soup.",
                "price": "5.45",
                "image": "images/daily_specials/ramen.jpg"
            },
            {
                "id": "yakitori",
                "name": "Yakitori",
                "description": "Grilled chicken skewers.",
                "price": "5.95",
                "image": "images/daily_specials/yakitori.jpg"
            },
            {
                "id": "tonkatsu",
                "name": "Tonkatsu",
                "description": "Breaded pork cutlets drizzled with a sweet and piquante sauce.",
                "price": "9.95",
                "image": "images/daily_specials/tonkatsu.jpg"
            },
            {
                "id": "soybeans",
                "name": "Soy Beans",
                "description": "Steamed fermented soybeans.",
                "price": "4.95",
                "image": "images/daily_specials/soybeans.jpg"
            },
            {
                "id": "tamagoyaki",
                "name": "Tamagoyaki",
                "description": "Rolled egg mix with dashi and cut into slices.",
                "price": "8.95",
                "image": "images/daily_specials/tamagoyaki.jpg"
            }
        ];

    console.log("Index:", pagesIndex);

    lunrIndex = lunr(function () {
        this.ref("id");
        this.field("name");
        this.field("description");
        this.field("price");
        this.field("image");

        pagesIndex.forEach(function (page) {
            this.add(page);
        }, this);
    });
}

function search(query) {
    return lunrIndex.search(query).map(function (result) {
        return pagesIndex.filter(function (page) {
            return page.id === result.ref;
        })[0];
    });
}

function showResults(results) {
    if (!results.length) {
        $results.append($("<h2>No results found.</h2>"));
        return;
    }

    var curr;
    var $curr;

    results.forEach(function (result) {
        curr = "<div class=\"tile-food\">";
        curr += "<div class=\"tile-img\">";
        curr += "<img class=\"img-responsive\" src=\"" + result.image + "\">";
        curr += "<h4>" + result.name + "</h4>";
        curr += "<p>" + result.description + "</p></div>";
        curr += "<div class=\"price-row\">";
        curr += "<div class=\"item-price\"><b>$" + result.price + "</b></div>";
        curr += "<div class=\"item-qty\">";
        curr += "<label for=\"" + result.id + "\">Qty:&nbsp;</label>";
        curr += "<select id=\"" + result.id + "\">";

        for (var i = 1; i <= 5; i++) {
            curr += "<option value=\"" + i + "\">" + i + "</option>";
        }

        curr += "</select></div><div class=\"item-add\"><button class=\"btn ";
        curr += "btn-success my-cart-btn\" data-id=\"" + result.id +
            "\" data-name=\"" + result.name + "\" data-summary=\"" + result.description +
            "\" data-price=\"" + result.price + "\" data-quantity=\"" + result.id +
            "\" data-image=\"" + result.image + "\">Add</button></div></div>";
        $curr = $(curr);
        $results.append($curr);
    });

    $results.append($("<div class=\"clearfix\">"));
}

initLunr();

var searchMsg = "<h3>Type the name of the item you are looking for in the " +
    "search bar or select a category from the menu.</h3>";

$(document).ready(function () {
    $("#search").keyup(function () {
        $results.empty();
        var query = $(this).val();

        if (query.length < 1) {
            $results.append($(searchMsg));
            return;
        }

        var results = search(query);
        showResults(results);
    });

    $results = $("#results");

    $("#requestHelp").click(function () {
        alert("A staff member will come and assist you shortly.");
    });
    
    if (localStorage.getItem("price") != null) {
        $("#cart-text").html(localStorage.getItem("price"));
    }

    var goToCartIcon = function ($addTocartBtn) {
    };

    $('.my-cart-btn').myCart({
        currencySymbol: '$',
        classCartIcon: 'my-cart-icon',
        classCartBadge: 'my-cart-badge',
        classProductQuantity: 'my-product-quantity',
        classProductRemove: 'my-product-remove',
        classCheckoutCart: 'my-cart-checkout',
        affixCartIcon: false,
        showCheckoutModal: true,
        numberOfDecimals: 2,
        clickOnAddToCart: function ($addTocart) {
            goToCartIcon($addTocart);
        },
        afterAddOnCart: function (products, totalPrice, totalQuantity) {
            if (localStorage.getItem("price") != null) {
                $("#cart-text").html(localStorage.getItem("price"));
            }

            console.log("Added to Cart: ", products, totalPrice, totalQuantity);
        },
        clickOnCartIcon: function ($cartIcon, products, totalPrice, totalQuantity) {
            console.log("Cart icon clicked: ", $cartIcon, products, totalPrice, totalQuantity);
        },
        checkoutCart: function (products, totalPrice, totalQuantity) {
            console.log("Checking out: ", products, totalPrice, totalQuantity);
        },
        getTax: function (products, totalPrice, totalQuantity) {
            return totalPrice - (totalPrice / 1.13);
        }
    });

    var $input = $("#refresh");

    if ($input.val() === "yes") {
        location.reload(true);
    }
    else {
        $input.val("yes");
    }
});
