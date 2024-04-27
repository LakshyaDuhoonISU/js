var items = new Array();
items.push("Leadership");
items.push("Communication");
items.push("Sales");
var incrementedItems = new Array();
items.forEach((x) => {
  console.log(x);
  incrementedItems.push(x + 1);
});
console.log("****Incremented Array****");
incrementedItems.forEach((y) => {
  console.log(y);
});
