let selectedMood = "";

// show mood page
function showMoodPage() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("mood").classList.remove("hidden");
}

// when a mood button is clicked
function selectMood(mood) {
  selectedMood = mood;
  document.getElementById("mood").classList.add("hidden");
  document.getElementById("preferences").classList.remove("hidden");
}

// when "Show Recipes" is clicked
function showRecipes() {
  document.getElementById("preferences").classList.add("hidden");
  document.getElementById("recipes").classList.remove("hidden");

  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = ""; // clear old content

  // recipes now include real details
  const recipes = {
    Happy: [
      {
        name: "Rainbow Veggie Wrap",
        description: "A colourful, fresh wrap that matches a happy mood.",
        ingredients: [
          "1 tortilla wrap",
          "Lettuce",
          "Tomato",
          "Cucumber",
          "Grated carrot",
          "2 tbsp hummus"
        ],
        steps: [
          "Spread hummus over the tortilla.",
          "Add all the chopped vegetables in the centre.",
          "Roll the wrap tightly and slice in half."
        ]
      },
      {
        name: "Fruit Smoothie Bowl",
        description: "Bright, sweet and fun to decorate.",
        ingredients: [
          "1 banana",
          "1 cup frozen berries",
          "1/2 cup yoghurt or milk",
          "Granola or nuts for topping"
        ],
        steps: [
          "Blend the banana, berries and yoghurt until smooth.",
          "Pour into a bowl and add granola or nuts on top."
        ]
      }
    ],
    Tired: [
      {
        name: "One-Pan Chicken & Rice",
        description: "Low-effort comfort meal for tired days.",
        ingredients: [
          "Chicken pieces",
          "1 cup rice",
          "2 cups stock or water + stock cube",
          "Frozen mixed vegetables"
        ],
        steps: [
          "Add chicken, rice, veggies and stock to a pan.",
          "Cover with a lid and simmer until rice and chicken are cooked."
        ]
      }
    ],
    Sad: [
      {
        name: "Chocolate Mug Cake",
        description: "Quick chocolate fix in a mug.",
        ingredients: [
          "4 tbsp flour",
          "2 tbsp cocoa powder",
          "2 tbsp sugar",
          "3 tbsp milk",
          "1 tbsp oil"
        ],
        steps: [
          "Mix all ingredients in a large mug.",
          "Microwave for about 1 minute until risen (watch it carefully)."
        ]
      }
    ],
    Stressed: [
      {
        name: "Comfort Soup Bowl",
        description: "Simple, warm soup to help you relax.",
        ingredients: [
          "2 cups stock",
          "Noodles or small pasta",
          "Mixed vegetables (fresh or frozen)"
        ],
        steps: [
          "Bring the stock to a boil.",
          "Add noodles and vegetables and cook until soft."
        ]
      }
    ],
    Bored: [
      {
        name: "DIY Taco Kit",
        description: "Fun hands-on meal for bored moods.",
        ingredients: [
          "Taco shells",
          "Cooked mince or beans",
          "Cheese",
          "Lettuce",
          "Tomato"
        ],
        steps: [
          "Lay out all ingredients in bowls.",
          "Fill taco shells with whatever toppings you like."
        ]
      }
    ]
  };

  const moodRecipes = recipes[selectedMood] || [];

  // heading text
  const heading = document.createElement("p");
  heading.innerHTML = `You selected: <strong>${selectedMood}</strong>`;
  recipeList.appendChild(heading);

  if (moodRecipes.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No recipes found for this mood.";
    recipeList.appendChild(msg);
    return;
  }

  // create a card for each recipe
  moodRecipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    const title = document.createElement("h3");
    title.textContent = recipe.name;

    const desc = document.createElement("p");
    desc.innerHTML = `<em>${recipe.description}</em>`;

    const ingHeader = document.createElement("h4");
    ingHeader.textContent = "Ingredients";

    const ingList = document.createElement("ul");
    recipe.ingredients.forEach((ing) => {
      const li = document.createElement("li");
      li.textContent = ing;
      ingList.appendChild(li);
    });

    const stepHeader = document.createElement("h4");
    stepHeader.textContent = "Steps";

    const stepList = document.createElement("ol");
    recipe.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      stepList.appendChild(li);
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(ingHeader);
    card.appendChild(ingList);
    card.appendChild(stepHeader);
    card.appendChild(stepList);

    recipeList.appendChild(card);
  });
}

function resetPage() {
  location.reload();
}
