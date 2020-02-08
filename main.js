$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
    data
  ) {
    let appetizer = data.appetizers
      .map(function(item) {
        return `
    <li class="foodItems" id="appitizer">
    <h3 class="foodTitle">${item.name}</h3>
    <span class="menuPrice">$${item.price}</span>
    <p class="foodDesc">
      ${item.description}
    </p>
    </li>
    `
      })
      .join("")
    $("#appitizer").html(appetizer)
    let entre = data.entrees
      .map(function(item) {
        return `
    <li class="foodItems" id="entre">
    <h3 class="foodTitle">${item.name}</h3>
    <span class="menuPrice">$${item.price}</span>
    <p class="foodDesc">
      ${item.description}
    </p>
    </li>
    `
      })
      .join("")
    $("#entres").html(entre)
    let dessert = data.desserts
      .map(function(item) {
        return `
    <li class="foodItems" id="dessert">
    <h3 class="foodTitle">${item.name}</h3>
    <span class="menuPrice">$${item.price}</span>
    <p class="foodDesc">
      ${item.description}
    </p>
    </li>
    `
      })
      .join("")
    $("#desserts").html(dessert)
  })
})
