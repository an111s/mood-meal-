let selectedMood = "";

function showMoodPage() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("mood").classList.remove("hidden");
}

function selectMood(mood) {
  selectedMood = mood;
  document.getElementById("mood").classList.add("hidden");
  document.getElementById("preferences").classList.remove("hidden");
}

function showRecipes() {
  document.getElementById("preferences").classList.add("hidden");
  document.getElementById("recipes").classList.remove("hidden");

  const recipeList = document.getElementById("recipeList");

  // recipes now include name, ingredients and steps
  const recipes = {
    Happy: [
      {
        name: "Rainbow Veggie Wrap",
        description: "A colourful, fresh wrap that matches a happy mood.",
        ingredients: ["Tortilla wrap", "Lettuce", "Tomato", "Cucumber", "Grated carrot", "Hummus"],
        steps: [
          "Spread hummus on the wrap.",
          "Add chopped veggies in the centre.",
          "Roll it up tightly and slice in half."
        ]
      },
      {
        name: "Fruit Smoothie Bowl",
        description: "Bright, sweet and perfect for a good mood.",
        ingredients: ["Frozen berries", "Banana", "Yoghurt or milk", "Granola"],
        steps: [
          "Blend berries, banana and yoghurt until smooth.",
          "Pour into a bowl and top with granola."
        ]
      }
    ],
    Tired: [
      {
        name: "One-Pan Chicken & Rice",
        description: "Low-effort comfort meal for tired days.",
        ingredients: ["Chicken pieces", "Rice", "Stock cube", "Mixed veggies"],
        steps: [
          "Add chicken, rice, veggies and water with stock cube to a pan.",
          "Simmer with lid on until rice is cooked and chicken is done."
        ]
      }
    ],
    Sad: [
      {
        name: "Chocolate Mug Cake",
        description: "Quick dessert for a sad mood.",
        ingredients: ["Flour", "Cocoa powder", "Sugar", "Milk", "Oil"],
        steps: [
          "Mix all ingredients in a mug.",
          "Microwave for about 1 minute until risen."
        ]
      }
    ],
    Stressed: [
      {
        name: "Comfort Soup Bowl",
        description: "Warm, simple soup to calm you down.",
        ingredients: ["Stock", "Noodles or pasta", "Mixed vegetables"],
        steps: [
          "Boil stock in a pot.",
          "Add noodles and veggies and cook until soft."
        ]
      }
    ],
    Bored: [
      {
        name: "DIY Taco Kit",
        description: "Fun to assemble when you’re bored.",
        ingredients: ["Taco shells", "Cooked mince or beans", "Cheese", "Lettuce", "Tomato"],
        steps: [
          "Lay out all ingredients in small bowls.",
          "Fill taco shells with toppings however you like."
        ]
      }
    ]
  };

  const moodRecipes = recipes[selectedMood] || [];

  recipeList.innerHTML = `
    <p>You selected: <strong>${selectedMood}</strong></p>
    ${
      moodRecipes.length === 0
        ? "<p>No recipes found for this mood.</p>"
        : moodRecipes
            .map(
              (recipe) => `
      <div class="recipe-card">
        <h3>${recipe.name}</h3>
        <p><em>${recipe.description}</em></p>
        <h4>Ingredients</h4>
        <ul>
          ${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
        <h4>Steps</h4>
        <ol>
          ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    `
            )
            .join("")
    }
  `;
}

function resetPage() {
  location.reload();
}
