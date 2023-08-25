

var takeOutOrders = []

function takeOrder(order, deliveryOrders){
  if(order.orderType === 'delivery' && deliveryOrders.length < 3){
  deliveryOrders.push(order);
   return deliveryOrders;
}  else if (order.orderType === 'takeOut' && takeOutOrders.length < 3) {
         takeOutOrders.push(order)
   return takeOutOrders;
} else {
  return 'Order limit reached'
}
}
// var deliveryOrders = [order1, order2, order3]

// function refundOrder (orderNumber, deliveryOrders){
// return deliveryOrders.filter(function(order) {
// return order.orderNumber !== orderNumber
// })
// }
// newDeliveryOrders = refundOrder(1657, deliveryOrders)

function refundOrder (orderNumber, deliveryOrders){
  for (i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === orderNumber){
      return deliveryOrders.splice(i, 1)
    }
  }
}


function listItems(deliveryArry) {
  var items = []
  for (var i = 0; i < deliveryArry.length; i++){
    items.push(deliveryArry[i].item);
    } return items.join(', ')
}

function searchOrder (deliveryOrders, item) {
for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].item === item) {
    return true;
} 
} 
return false;

}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}