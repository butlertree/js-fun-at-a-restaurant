
function createRestaurant (name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
    }
  }


  function addMenuItem(pizzaRestaurant, item) {
    var type = item.type
    
    if (!pizzaRestaurant.menus[type].includes(item)) {
      pizzaRestaurant.menus[type].push(item);
    }
    return pizzaRestaurant;
  }
  
  // addMenuItem(pizzaRestaurant, bbqPizza)
  
  
//   === type && !pizzaRestaurant.menus[type].includes(item)){
//     pizzaRestaurant.menus[type].push(item);
//    } return pizzaRestaurant 
    
// }



function removeMenuItem(pizzaRestaurant, name, type){
for (var i = 0; i < pizzaRestaurant.menus[type].length; i++){
  if (pizzaRestaurant.menus[type][i].name === name){
   pizzaRestaurant.menus[type].splice(i, 1)
 return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
  }
}
 return `Sorry, we don't sell ${name}, try adding a new recipe!`
}


function checkForFood(pizzaRestaurant, foodItem){
for (var i = 0; i < pizzaRestaurant.menus[foodItem.type].length; i++){
  if(pizzaRestaurant.menus[foodItem.type][i].name === foodItem.name){
    return `Yes, we're serving ${foodItem.name} today!`
  }
}  return `Sorry, we aren't serving ${foodItem.name} today.`
}


module.exports = {
  createRestaurant,  
  addMenuItem,
  removeMenuItem,
  checkForFood
}