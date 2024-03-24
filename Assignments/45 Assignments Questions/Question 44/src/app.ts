// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function Sandwich(...items: string[]) {
    console.log(`Today we will make sandwish using: ${items.join(', ')}.`);
}

Sandwich("cheese");
Sandwich("chicken", "mayo");
Sandwich("chicken", "mayo", "cheese");

