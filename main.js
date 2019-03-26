const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];
let ingredientCounter = 1;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((ingredient) => {
      domString += `<div class="card col-3">`;
      domString += `  <div class="card-body">`;
      domString += `    <h5 class="card-title">${ingredient.item}</h5>`;
      domString += `    <a class="btn btn-danger deleteButton" id =${ingredient.id}>Delete</a>`;
      domString += `  </div>`;
      domString += `</div>`;
    });

    printToDom('ingredient-container', domString);
  };

const addIngredient = (e) => {
    e.preventDefault();
    const inputText = inputIngredient.value;
    const newIngredient = {
        item: inputText,
        id: `ingredient${ingredientCounter}`,
    };
    ingredients.push(newIngredient);
    ingredientCounter ++;
    domStringBuilder(ingredients);
    inputIngredient.value = '';
}

const eventListeners = () => {
    addButton.addEventListener('click', addIngredient)
}

const init = () => {
    eventListeners();
};

init();