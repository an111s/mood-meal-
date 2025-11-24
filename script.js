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

  const recipes = {
    Happy: ["Rainbow Veggie Wrap", "Fruit Smoothie Bowl", "Colorful Pasta Salad"],
    Tired: ["One-Pan Chicken & Rice", "Cheesy Garlic Pasta", "5-Minute Omelette"],
    Sad: ["Chocolate Lava Mug Cake", "Creamy Mac & Cheese", "Warm Apple Crumble"],
    Stressed: ["Herb Lemon Salmon", "Green Tea Noodles", "Comfort Soup Bowl"],
    Bored: ["DIY Taco Kit", "Loaded Nachos", "Homemade Pizza Toast"]
  };

  recipeList.innerHTML = `
    <p>You selected: <strong>${selectedMood}</strong></p>
    <h3>Suggested Recipes:</h3>
    <ul>
      ${recipes[selectedMood].map(recipe => `<li>${recipe}</li>`).join("")}
    </ul>
  `;
}

function resetPage() {
  location.reload();
}
