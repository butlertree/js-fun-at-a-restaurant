function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem (menuName, price, type) {
  return {
  name: menuName,
  price: price,
  type:  type
}
}

function addIngredients(ingredient, ingredientArray){
  if(!ingredientArray.includes(ingredient)) {
     ingredientArray.push(ingredient);
  } return ingredientArray
}
 
  function formatPrice (formatPrice) {
     return `$${formatPrice}`
  }

function decreasePrice (price){
return price * .9
}

function createRecipe (title, ingredients, type)  {
return {
  title: title,
  ingredients: ingredients,
  type: type
}
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


