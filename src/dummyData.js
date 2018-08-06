 //let's pretend all this is data of zipcode 94123
 const dummyData = [
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.8333333333333334,
                "sweet": 0.6666666666666666,
                "bitter": 0.5,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 4.6,
            "id": "Vegetarian-Cabbage-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 4500,
            "ingredients": [
                "garlic cloves",
                "ground pepper",
                "diced tomatoes",
                "celery",
                "tomato juice",
                "salt",
                "cabbage",
                "bell peppers",
                "oregano",
                "carrots",
                "basil",
                "vegetable broth",
                "chili pepper flakes",
                "green beans",
                "onions",
                "onion soup mix"
            ],
            "recipeName": "Vegetarian Cabbage Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Moroccan",
                    "Asian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.6666666666666666,
                "sweet": 0.5,
                "bitter": 0.5,
                "meaty": 0.3333333333333333,
                "piquant": 0.6666666666666666
            },
            "rating": 5,
            "id": "Oriental-Inspired-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 24300,
            "ingredients": [
                "tamari",
                "rice vinegar",
                "bamboo shoots",
                "lime juice",
                "pepper",
                "vegetable bouillon",
                "sesame oil",
                "salt",
                "carrots",
                "yellow onions",
                "red pepper",
                "garlic",
                "fish",
                "baby corn",
                "crushed red pepper",
                "spinach",
                "cremini mushrooms",
                "ginger",
                "peanut oil",
                "water",
                "raw sugar",
                "ketchup",
                "chives",
                "cabbage",
                "water chestnuts",
                "hot chili oil"
            ],
            "recipeName": "Oriental Inspired Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Main Dishes",
                    "Soups"
                ],
                "cuisine": [
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.5,
                "sweet": 0.5,
                "bitter": 0.8333333333333334,
                "meaty": 0.6666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 5,
            "id": "Chunky-Rice-And-Bean-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 2700,
            "ingredients": [
                "dried oregano",
                "chili powder",
                "chopped celery",
                "long grain rice",
                "kidney beans",
                "shredded cabbage",
                "red pepper",
                "carrot",
                "onion",
                "minced garlic",
                "green beans",
                "olive oil",
                "pepper",
                "vegetable stock"
            ],
            "recipeName": "Chunky Rice and Bean Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups",
                    "Appetizers"
                ],
                "cuisine": [
                    "German"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 0.6666666666666666,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 5,
            "id": "7-Samurai-Vegan-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 3000,
            "ingredients": [
                "carrots",
                "cauliflower",
                "water",
                "onions",
                "garlic cloves",
                "pepper",
                "potatoes",
                "brussels sprouts",
                "salt",
                "olive oil",
                "celery ribs",
                "curry powder"
            ],
            "recipeName": "7 Samurai Vegan Soup"
        },
        {
            "attributes": {
                "course": [
                    "Main Dishes",
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.8333333333333334,
                "sweet": 0.6666666666666666,
                "bitter": 0.5,
                "meaty": 0.3333333333333333,
                "piquant": 0.5
            },
            "rating": 5,
            "id": "Tomato-Lentil-Soup-Recipezaar_3",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 4500,
            "ingredients": [
                "salt",
                "onions",
                "broccoli",
                "celery",
                "carrots",
                "lentils",
                "green pepper",
                "tomato juice",
                "tomato puree",
                "apple cider vinegar",
                "clove garlic",
                "red cabbage",
                "olive oil",
                "zucchini",
                "tamari",
                "water",
                "bay leaf"
            ],
            "recipeName": "Tomato Lentil Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.5,
                "sour": 0.3333333333333333,
                "sweet": 0.5,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 5,
            "id": "Very-Veggie-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 5400,
            "ingredients": [
                "tomato paste",
                "water",
                "celery",
                "corn",
                "shredded cabbage",
                "green beans",
                "pepper",
                "vegetable broth",
                "shallots",
                "diced tomatoes",
                "salt",
                "olive oil",
                "chili paste",
                "carrots"
            ],
            "recipeName": "Very Veggie Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Cuban",
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 0.6666666666666666,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 5,
            "id": "Cabbage-And-Tofu-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 3000,
            "ingredients": [
                "bay leaves",
                "white onion",
                "tofu",
                "peppercorns",
                "diced tomatoes",
                "cabbage",
                "red wine",
                "carrots",
                "red pepper flakes",
                "water",
                "dried oregano",
                "green beans"
            ],
            "recipeName": "Cabbage and Tofu Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.3333333333333333,
                "sour": 0.5,
                "sweet": 0.5,
                "bitter": 0.3333333333333333,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 4,
            "id": "Everything-Soup-Recipezaar_2",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 8100,
            "ingredients": [
                "garlic cloves",
                "basil",
                "salt",
                "spinach",
                "bean",
                "carrots",
                "tomatoes",
                "cabbage",
                "celery",
                "sweet onion",
                "water",
                "oregano",
                "water",
                "pepper",
                "vegetable stock base",
                "lentils",
                "thyme",
                "red beans"
            ],
            "recipeName": "Everything Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.6666666666666666,
                "sweet": 0.6666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 4.84,
            "id": "Zero-Fat-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 2400,
            "ingredients": [
                "salt",
                "green beans",
                "dried basil",
                "red bell pepper",
                "carrot",
                "green cabbage",
                "diced tomatoes",
                "dried oregano",
                "onions",
                "dried thyme",
                "dill",
                "garlic cloves",
                "soy sauce",
                "cider vinegar",
                "black pepper",
                "vegetable broth",
                "celery"
            ],
            "recipeName": "Zero Fat Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 1,
                "sour": 0.5,
                "sweet": 0.3333333333333333,
                "bitter": 0.8333333333333334,
                "meaty": 1,
                "piquant": 0.6666666666666666
            },
            "rating": 4.5,
            "id": "Vegetable_cod-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 2100,
            "ingredients": [
                "margarine",
                "dried basil",
                "vegetable broth",
                "onion",
                "green beans",
                "pepper",
                "dried thyme",
                "carrot",
                "rosemary",
                "fish fillet",
                "red pepper",
                "cabbage"
            ],
            "recipeName": "Vegetable-Cod Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.3333333333333333,
                "sour": 0.6666666666666666,
                "sweet": 0.16666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 5,
            "id": "Creamy-Cabbage-Soup-_dairy_free_-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1800,
            "ingredients": [
                "soymilk",
                "vegetable broth",
                "white pepper",
                "cabbage"
            ],
            "recipeName": "Creamy Cabbage Soup (Dairy-Free)"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Moroccan",
                    "Asian"
                ]
            },
            "flavors": {
                "salty": 0.8333333333333334,
                "sour": 0.6666666666666666,
                "sweet": 0.5,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 5,
            "id": "Ww-Zero-Point-Asian-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 2100,
            "ingredients": [
                "water chestnut",
                "scallions",
                "garlic cloves",
                "bean sprouts",
                "snow peas",
                "vegetable broth",
                "cilantro",
                "gingerroot",
                "chinese cabbage",
                "oyster mushrooms",
                "low sodium soy sauce",
                "bok choy",
                "red pepper",
                "red pepper flakes"
            ],
            "recipeName": "Ww Zero Point Asian Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 0.8333333333333334,
                "sweet": 0.5,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 5,
            "id": "My-Weight-Watcher-Killer-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 8100,
            "ingredients": [
                "salt",
                "green beans",
                "green cabbage",
                "old bay seasoning",
                "hot sauce",
                "italian seasoning",
                "celery ribs",
                "onion",
                "tomato juice",
                "carrots",
                "garlic cloves",
                "water",
                "pepper",
                "bay leaves"
            ],
            "recipeName": "My Weight Watcher Killer Soup"
        },
        {
            "attributes": {
                "course": [
                    "Main Dishes",
                    "Soups"
                ],
                "cuisine": [
                    "Cuban",
                    "Soul Food",
                    "Southwestern",
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.3333333333333333,
                "sour": 0.6666666666666666,
                "sweet": 0.6666666666666666,
                "bitter": 0.3333333333333333,
                "meaty": 0.3333333333333333,
                "piquant": 0.5
            },
            "rating": 4,
            "id": "Dreamy-Cabbage-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 5400,
            "ingredients": [
                "tomato juice",
                "garlic powder",
                "pea",
                "potatoes",
                "corn",
                "pepper",
                "oregano",
                "brown rice",
                "salt",
                "shredded cabbage",
                "shredded carrots",
                "couscous"
            ],
            "recipeName": "Dreamy Cabbage Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups",
                    "Lunch and Snacks"
                ],
                "cuisine": [
                    "Italian"
                ],
                "holiday": [
                    "Thanksgiving"
                ]
            },
            "flavors": {
                "salty": 0.3333333333333333,
                "sour": 0.8333333333333334,
                "sweet": 0.5,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 4,
            "id": "Satan_s-Own-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 3300,
            "ingredients": [
                "cabbage",
                "cayenne pepper",
                "basil",
                "oregano",
                "celery",
                "tomato paste",
                "onion",
                "dill weed",
                "carrots",
                "parsley"
            ],
            "recipeName": "Satan's Own Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Tuscan",
                    "Indian",
                    "Italian",
                    "Sindhi"
                ]
            },
            "flavors": {
                "salty": 0.5,
                "sour": 0.6666666666666666,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 3,
            "id": "Vegetable-Soup-Recipezaar_5",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 3000,
            "ingredients": [
                "carrots",
                "oil",
                "potatoes",
                "cabbage",
                "garlic cloves",
                "water",
                "black pepper",
                "cajun seasoning",
                "salt",
                "okra",
                "celery",
                "rice"
            ],
            "recipeName": "Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Thai",
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.5,
                "sweet": 0.16666666666666666,
                "bitter": 0.3333333333333333,
                "meaty": 0.16666666666666666,
                "piquant": 0.8333333333333334
            },
            "rating": 5,
            "id": "Fat-Free-Thai-Style-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [
                "http://i.yummly.com/Fat-Free-Thai-Style-Vegetable-Soup-Recipezaar-12713.s.png"
            ],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1500,
            "ingredients": [
                "fresh lime",
                "carrot",
                "coriander",
                "zucchini",
                "fresh ginger",
                "chinese cabbage",
                "tamarind paste",
                "cumin seed",
                "green chilies",
                "salt",
                "coriander seed",
                "pepper",
                "soy sauce",
                "lemongrass",
                "lemon juice",
                "water",
                "tomatoes"
            ],
            "recipeName": "Fat Free Thai Style Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Indian",
                    "Jamaican",
                    "Sindhi"
                ]
            },
            "flavors": {
                "salty": 0.5,
                "sour": 0.3333333333333333,
                "sweet": 0.5,
                "bitter": 0.5,
                "meaty": 0.5,
                "piquant": 0.6666666666666666
            },
            "rating": 4.2,
            "id": "Hearty-Vegan-Navy-Bean-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 10800,
            "ingredients": [
                "tomato sauce",
                "parsley flakes",
                "black pepper",
                "cabbage",
                "water",
                "garlic cloves",
                "balsamic vinegar",
                "bay leaves",
                "celery",
                "onions",
                "mustard powder",
                "salt",
                "chili powder",
                "thyme",
                "ground ginger",
                "carrots",
                "tabasco sauce",
                "navy beans"
            ],
            "recipeName": "Hearty Vegan Navy Bean Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Thai"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.16666666666666666,
                "sweet": 0.5,
                "bitter": 0.16666666666666666,
                "meaty": 0.6666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 4,
            "id": "Thai-Green-Curry-Shrimp-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 4500,
            "ingredients": [
                "green curry paste",
                "tamarind paste",
                "brown sugar",
                "straw mushrooms",
                "chinese cabbage",
                "green beans",
                "carrot",
                "fish sauce",
                "shrimp"
            ],
            "recipeName": "Thai Green Curry Shrimp Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Cuban",
                    "Moroccan",
                    "Russian"
                ]
            },
            "flavors": {
                "salty": 0.5,
                "sour": 0.5,
                "sweet": 0.3333333333333333,
                "bitter": 0.5,
                "meaty": 0.3333333333333333,
                "piquant": 0.6666666666666666
            },
            "rating": 0,
            "id": "Russian-Vegetable-Soup-_borstch_-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 7200,
            "ingredients": [
                "onions",
                "water",
                "potatoes",
                "salt",
                "peppercorn",
                "oil",
                "kidney beans",
                "bay leaves",
                "mrs dash",
                "beets",
                "hot sauce",
                "carrot",
                "ground cumin",
                "sugar",
                "lemon juice",
                "cabbage"
            ],
            "recipeName": "Russian Vegetable Soup (Borstch)"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Asian",
                    "Italian",
                    "Chinese"
                ]
            },
            "flavors": {
                "salty": 0.8333333333333334,
                "sour": 0.5,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 0,
            "id": "Vegetable-Hot-And-Sour-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1500,
            "ingredients": [
                "green onion",
                "white pepper",
                "capsicum",
                "carrot",
                "button mushrooms",
                "garlic cloves",
                "dark soy sauce",
                "fresh ginger",
                "vegetable stock",
                "bean sprouts",
                "vinegar",
                "salt",
                "cornflour",
                "chili oil",
                "celery",
                "oil",
                "cabbage",
                "sugar",
                "beans",
                "bamboo shoot",
                "chili sauce",
                "onion"
            ],
            "recipeName": "Vegetable Hot and Sour Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 1,
                "sweet": 0.6666666666666666,
                "bitter": 0.3333333333333333,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Canned-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 14400,
            "ingredients": [
                "pepper",
                "onions",
                "water",
                "carrots",
                "tomatoes",
                "cabbage",
                "corn"
            ],
            "recipeName": "Canned Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "French"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 0.3333333333333333,
                "sweet": 0.16666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.6666666666666666
            },
            "rating": 0,
            "id": "Healthy-Mixed-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1500,
            "ingredients": [
                "broccoli",
                "salt",
                "capsicum",
                "chili powder",
                "ginger paste",
                "canola oil",
                "cabbage",
                "garlic paste",
                "soya sauce",
                "carrot",
                "cornflour",
                "onion",
                "water",
                "sugar",
                "cauliflower",
                "green beans"
            ],
            "recipeName": "Healthy Mixed Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.3333333333333333,
                "sour": 1,
                "sweet": 0.6666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Basic-Cabbage-Soup-Recipe-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 4500,
            "ingredients": [
                "cabbage",
                "tomatoes",
                "celery",
                "brown rice",
                "onions",
                "red peppers",
                "green onions",
                "black pepper",
                "carrots",
                "salt"
            ],
            "recipeName": "Basic Cabbage Soup Recipe"
        },
        {
            "attributes": {
                "course": [
                    "Main Dishes",
                    "Soups"
                ],
                "cuisine": [
                    "Asian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.8333333333333334,
                "sweet": 0.3333333333333333,
                "bitter": 0.3333333333333333,
                "meaty": 0.16666666666666666,
                "piquant": 0.8333333333333334
            },
            "rating": 0,
            "id": "Asian-Vegetable-Noodle-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1260,
            "ingredients": [
                "fish sauce",
                "water",
                "kaffir lime",
                "ginger",
                "rice noodles",
                "baby corn",
                "lemongrass",
                "bean sprouts",
                "bok choy",
                "vegetable stock",
                "coriander",
                "peas",
                "lime juice",
                "cloves",
                "chilies"
            ],
            "recipeName": "Asian Vegetable Noodle Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Soul Food",
                    "Southwestern"
                ]
            },
            "flavors": {
                "salty": 0.5,
                "sour": 0.5,
                "sweet": 0.16666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Cape-Verde-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1800,
            "ingredients": [
                "salt",
                "chili",
                "peanut oil",
                "okra",
                "onion",
                "fresh cilantro",
                "garlic cloves",
                "cabbage",
                "potatoes",
                "water",
                "fresh parsley",
                "lemon juice",
                "fresh cilantro",
                "fresh tomatoes",
                "summer savory"
            ],
            "recipeName": "Cape Verde Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Main Dishes",
                    "Soups"
                ],
                "cuisine": [
                    "Chinese"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.5,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.3333333333333333,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Chinese-Noodle-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1200,
            "ingredients": [
                "egg noodles",
                "water",
                "reduced sodium soy sauce",
                "bok choy",
                "fresh ginger",
                "vegetable broth",
                "chili powder",
                "corn kernels",
                "green onions",
                "broccoli"
            ],
            "recipeName": "Chinese Noodle Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Moroccan",
                    "Italian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.6666666666666666,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.8333333333333334
            },
            "rating": 0,
            "id": "Suk_s-Spicy-Soup-Recipezaar",
            "smallImageUrls": [
                "http://i.yummly.com/Suk_s-Spicy-Soup-Recipezaar-12558.s.png"
            ],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 2700,
            "ingredients": [
                "shiitake mushroom",
                "jalapeno",
                "sesame seeds",
                "gingerroot",
                "minced garlic",
                "cabbage",
                "red bell pepper",
                "green onion",
                "vegetable stock",
                "crushed red pepper",
                "paprika"
            ],
            "recipeName": "Suk's Spicy Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups",
                    "Appetizers"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.5,
                "sweet": 0.3333333333333333,
                "bitter": 0.3333333333333333,
                "meaty": 0.16666666666666666,
                "piquant": 0.8333333333333334
            },
            "rating": 0,
            "id": "Hot-_-Sour-Tom-Yum-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 6048000,
            "ingredients": [
                "chili peppers",
                "cabbage",
                "water",
                "tofu",
                "lemongrass",
                "tomatoes",
                "chili peppers",
                "sorrel",
                "mushrooms",
                "kaffir lime",
                "lime juice",
                "white radish",
                "coriander",
                "carrot",
                "soy sauce",
                "asafetida powder",
                "salt",
                "coriander root"
            ],
            "recipeName": "Hot & Sour Tom Yum Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Portuguese",
                    "Tuscan",
                    "Indian",
                    "Italian",
                    "Sindhi"
                ]
            },
            "flavors": {
                "salty": 0.5,
                "sour": 0.8333333333333334,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Home-Sweet-Home-Vegetable-Soup-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 5400,
            "ingredients": [
                "onions",
                "boiling water",
                "carrot",
                "dill",
                "celery",
                "quick oats",
                "tomato",
                "parsley",
                "salt",
                "cabbage",
                "black pepper",
                "red bell pepper",
                "canola oil",
                "garlic cloves",
                "potatoes",
                "celery root"
            ],
            "recipeName": "Home Sweet Home Vegetable Soup"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 0.5,
                "sweet": 0.16666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 5,
            "id": "Vegetable-Broth-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 2700,
            "ingredients": [
                "green cabbage",
                "water",
                "garlic cloves",
                "onion",
                "fresh parsley",
                "salt",
                "dry white wine",
                "dried porcini mushrooms",
                "black peppercorns",
                "carrots",
                "leeks",
                "fresh thyme"
            ],
            "recipeName": "Vegetable Broth"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "German"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.5,
                "sweet": 0.5,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 5,
            "id": "Uncle-Bill_s-Simple-Vegetable-Borscht-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 4500,
            "ingredients": [
                "dill weed",
                "apple",
                "red cabbage",
                "carrot",
                "green cabbage",
                "vegetable broth",
                "garlic cloves",
                "tomato paste",
                "black peppercorns",
                "green pepper",
                "soy sauce",
                "cauliflower floret",
                "hungarian paprika",
                "lemon juice",
                "potato",
                "beet",
                "red pepper",
                "celery rib",
                "onion",
                "margarine",
                "bay leaf",
                "water"
            ],
            "recipeName": "Uncle Bill's Simple Vegetable Borscht"
        },
        {
            "attributes": {
                "course": [
                    "Soups",
                    "Lunch and Snacks"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.5,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 4.67,
            "id": "Very-Good-For-Your-Health-And-Mine-Vegetarian-Lemon-And-Pepper-S-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 3300,
            "ingredients": [
                "mushrooms",
                "tomato",
                "bean sprouts",
                "vegetable stock",
                "lemon juice",
                "cabbage",
                "capsicum",
                "salt",
                "carrot",
                "oil",
                "black peppercorns"
            ],
            "recipeName": "Very Good For Your Health And Mine Vegetarian Lemon and Pepper S"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 0.3333333333333333,
                "sweet": 0.16666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 4,
            "id": "Scott_s-Vegetable-Broth-With-Very-Low-Sodium-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 43200,
            "ingredients": [
                "celery ribs",
                "thyme",
                "bay leaf",
                "sweet basil",
                "spanish onions",
                "cabbage",
                "green bell peppers",
                "water",
                "carrots",
                "black peppercorns"
            ],
            "recipeName": "Scott's Vegetable Broth With Very Low Sodium"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Vietnamese"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.16666666666666666,
                "sweet": 0.16666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Vietnamese-Vegetable-Stock-Nuoc-Leo-Rau-Cai-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 3600,
            "ingredients": [
                "salt",
                "celery",
                "pepper",
                "cabbage",
                "water",
                "radish",
                "carrot"
            ],
            "recipeName": "Vietnamese Vegetable Stock Nuoc Leo Rau Cai"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Asian"
                ]
            },
            "flavors": {
                "salty": 0.3333333333333333,
                "sour": 1,
                "sweet": 0.5,
                "bitter": 0.3333333333333333,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Asian-Vegetable-Broth-Recipezaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 2400,
            "ingredients": [
                "carrots",
                "garlic cloves",
                "black pepper",
                "baby bok choy",
                "kosher salt",
                "chives",
                "celery ribs",
                "red pepper",
                "onion",
                "fresh ginger",
                "lemongrass"
            ],
            "recipeName": "Asian Vegetable Broth"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.16666666666666666,
                "sour": 0.6666666666666666,
                "sweet": 0.16666666666666666,
                "bitter": 0.16666666666666666,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Vegetable-Stock-Recipezaar_3",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 5400,
            "ingredients": [
                "carrots",
                "shallots",
                "black peppercorns",
                "fresh thyme",
                "water",
                "leeks",
                "parsnips",
                "cabbage",
                "celery ribs",
                "fresh parsley",
                "bay leaves"
            ],
            "recipeName": "Vegetable Stock"
        },
        {
            "attributes": {
                "course": [
                    "Main Dishes",
                    "Soups"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.6666666666666666,
                "sweet": 0.3333333333333333,
                "bitter": 0.16666666666666666,
                "meaty": 0.3333333333333333,
                "piquant": 0.6666666666666666
            },
            "rating": 0,
            "id": "Miso-Vegetable-Noodle-Bowl-Recipezaar",
            "smallImageUrls": [
                "http://i.yummly.com/Miso-Vegetable-Noodle-Bowl-Recipezaar-12762.s.png"
            ],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 1200,
            "ingredients": [
                "vegetable broth",
                "lime",
                "edamame",
                "green onion",
                "snow peas",
                "fresh cilantro",
                "carrot",
                "shiitake mushroom caps",
                "peeled fresh ginger",
                "udon",
                "yellow miso",
                "napa cabbage",
                "chili paste",
                "fresh lime juice",
                "water",
                "red bell pepper"
            ],
            "recipeName": "Miso Vegetable Noodle Bowl"
        },
        {
            "attributes": {
                "course": [
                    "Soups"
                ],
                "cuisine": [
                    "Hungarian"
                ]
            },
            "flavors": {
                "salty": 0.6666666666666666,
                "sour": 0.8333333333333334,
                "sweet": 0.5,
                "bitter": 0.3333333333333333,
                "meaty": 0.16666666666666666,
                "piquant": 0.5
            },
            "rating": 0,
            "id": "Eroleves-_hungarian-Consomme_-RecipeZaar",
            "smallImageUrls": [],
            "sourceDisplayName": "Food.com",
            "totalTimeInSeconds": 13500,
            "ingredients": [
                "egg noodles",
                "onion",
                "parsley",
                "carrots",
                "cloves",
                "cabbage",
                "kohlrabi",
                "garlic cloves",
                "soup",
                "bay leaves",
                "peppercorns",
                "parsnips",
                "leeks",
                "celery",
                "salt",
                "soup",
                "cold water"
            ],
            "recipeName": "Erõleves (hungarian Consommé)"
        }
    ];

    const testZipData = {
        94123: { Italian: 14,
                  Moroccan: 4,
                  Asian: 5,
                  German: 2,
                  Cuban: 3,
                  'Soul Food': 2,
                  Southwestern: 2,
                  Tuscan: 2,
                  Indian: 3,
                  Sindhi: 3,
                  Thai: 2,
                  Jamaican: 1,
                  Russian: 1,
                  Chinese: 2,
                  French: 1,
                  Portuguese: 1,
                  Vietnamese: 1,
                  Hungarian: 1 },
        78712: { American: 5,
                 Asian: 2,
                 Barbecue: 25,
                 Chinese: 3,
                 Cuban: 1,
                 French: 3,
                 Greek : 1,
                 Hawaiian: 6,
                 Hungarian: 2,
                 Indian: 4,
                 Italian: 7,
                 Japanese: 2,
                 Mediterranean: 1,
                 Mexican: 9,
                 'Southern & Soul Food': 6,
                 Southwestern: 5,
                 Spanish: 4,
                 Thai: 3
                },
        '03033': { Italian: 5,
                  Moroccan: 2,
                  Asian: 1,
                  German: 1,
                  Cuban: 2,
                  'Soul Food': 2,
                  Southwestern: 7,
                  American: 8,
                  Asian: 1,
                  Barbecue: 3,
                  Chinese: 2,
                  French: 5,
                  Greek : 2,
                  Hawaiian: 3,
                  Portuguese: 3,
                  Vietnamese: 1,
                  Hungarian: 1,
                  Indian: 6,

        }
    };

    // dummyData.forEach((recipe) => {
    //    if(recipe.attributes.cuisine) {
    //              recipe.attributes.cuisine.forEach((type) => {
    //         if (testZipData.hasOwnProperty(type)) {
    //             testZipData[type]++;
    //         } else {
    //             testZipData[type]= 1;
    //         }
    //     });
    //    }
    // })



export default testZipData;