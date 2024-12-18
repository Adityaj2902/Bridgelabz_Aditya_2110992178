<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Notes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
        }
        code {
            background-color: #eaeaea;
            padding: 2px 4px;
            border-radius: 3px;
        }
    </style>
</head>
<body>

    <h1>JavaScript Notes</h1>

    <h2>Restaurant Object</h2>
    <pre><code>
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
    </code></pre>
    <p>The <code>restaurant</code> is an object containing various properties and methods related to a restaurant.</p>

    <h2>Array Destructuring</h2>
    <pre><code>
const arr = [2, 3, 4];

// Destructuring the array
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring in one go
const [x, y, z] = arr;
    </code></pre>
    <p>Destructuring allows unpacking values from arrays into separate variables.</p>

    <h2>Skipping Elements in Destructuring</h2>
    <pre><code>
const [first, , second] = restaurant.categories;
let [main, , secondary] = restaurant.categories;
    </code></pre>
    <p>To skip elements during destructuring, leave the corresponding variable empty.</p>

    <h2>Switching Variables</h2>
    <pre><code>
// Switching Variables
[main, secondary] = [secondary, main];
    </code></pre>
    <p>This method allows switching the values of <code>main</code> and <code>secondary</code> without using a temporary variable.</p>

    <h2>Using the Order Method</h2>
    <pre><code>
const [starterMenuItem, mainMenuItem] = restaurant.order(1, 2);
    </code></pre>
    <p>Destructuring can also be applied to the result of a method call, allowing easy access to specific items.</p>

    <h2>Console Outputs</h2>
    <pre><code>
console.log(main, secondary);
console.log(starterMenuItem);
console.log(mainMenuItem);
    </code></pre>
    <p>These console logs will display the values of the variables after destructuring and method calls.</p>

</body>
</html>