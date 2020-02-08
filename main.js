$(document).ready(function() {
  $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
    data
  ) {
    let appetizer = data.appetizers
      .map(function(item) {
        let spice = ""
        if (item.extra.spicy) {
          spice +=
            '<img class="icon" src="https://img.icons8.com/pastel-glyph/64/000000/chili-pepper--v2.png">'
        }
        let gluten = ""
        if (item.extra.glutenfree) {
          gluten +=
            '<img class="icon" src="https://img.icons8.com/metro/26/000000/no-gluten.png"'
        }
        let vege = ""
        if (item.extra.vegetarian) {
          vege +=
            '<img class="icon" src="https://img.icons8.com/ios-filled/50/000000/vegetarian-mark--v2.png">'
        }
        return `
    <li class="foodItems" id="appitizer">
    <h3 class="foodTitle">${item.name}</h3>
    <span class="menuPrice">$${item.price}</span>
    <p class="foodDesc">
      ${item.description}
    </p>
    <span>${spice}${vege}${gluten}</span>
    </li>
    `
      })
      .join("")
    $("#appitizer").html(appetizer)
    let entre = data.entrees
      .map(function(item) {
        let spice = ""
        if (item.extra.spicy) {
          spice +=
            '<img class="icon" src="https://img.icons8.com/pastel-glyph/64/000000/chili-pepper--v2.png">'
        }
        let gluten = ""
        if (item.extra.glutenfree) {
          gluten +=
            '<img class="icon" src="https://img.icons8.com/metro/26/000000/no-gluten.png"'
        }
        let vege = ""
        if (item.extra.vegetarian) {
          vege +=
            '<img class="icon" src="https://img.icons8.com/ios-filled/50/000000/vegetarian-mark--v2.png">'
        }
        return `
    <li class="foodItems" id="entre">
    <h3 class="foodTitle">${item.name}</h3>
    <span class="menuPrice">$${item.price}</span>
    <p class="foodDesc">
      ${item.description}
    </p>
    <span>${spice}${vege}${gluten}</span>
    </li>
    `
      })
      .join("")
    $("#entres").html(entre)
    let dessert = data.desserts
      .map(function(item) {
        let spice = ""
        if (item.extra.spicy) {
          spice +=
            '<img class="icon" src="https://img.icons8.com/pastel-glyph/64/000000/chili-pepper--v2.png">'
        }
        let gluten = ""
        if (item.extra.glutenfree) {
          gluten +=
            '<img class="icon" src="https://img.icons8.com/metro/26/000000/no-gluten.png"'
        }
        let vege = ""
        if (item.extra.vegetarian) {
          vege +=
            '<img class="icon" src="https://img.icons8.com/ios-filled/50/000000/vegetarian-mark--v2.png">'
        }
        return `
    <li class="foodItems" id="dessert">
    <h3 class="foodTitle">${item.name}</h3>
    <span class="menuPrice">$${item.price}</span>
    <p class="foodDesc">
      ${item.description}
    </p>
    <span>${spice}${vege}${gluten}</span>
    </li>
    `
      })
      .join("")
    $("#desserts").html(dessert)
  })
  $("#menuButtons").on("click", "button", function(e) {
    $(".hidden").removeClass("show")
    $(this)
      .find("+ .hidden")
      .addClass("show")
  })
})
