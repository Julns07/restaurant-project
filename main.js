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
    e.preventDefault()
    $(".hidden").removeClass("show")
    $(this)
      .find("+ .hidden")
      .addClass("show")
  })
  $(".blogStructure").on("click", "a", function(e) {
    e.preventDefault()
    $(this)
      .find("+ .storyP")
      .addClass("showMore")
    $(this).addClass("hideRead")
    $(this)
      .parents(".blogStructure")
      .addClass("blogHeight")
  })

  let imgIndex = [
    { img_url: "5-piece-dining-set-outside-store-front-1237073.jpg" },
    { img_url: "beer-cheese-food-ham-56007.jpg" },
    { img_url: "restaurant-690975_1920.jpg" }
  ]

  imgIndex.forEach((item, i) => {
    var image = `<div id='image${i}' class='image'></div>`
    $("#carosuel").append(image)
    $(`#image${i}`).css("background-image", `url(${item.img_url})`)
  })

  let currentIndex = 0

  function change() {
    if (currentIndex === imgIndex.length - 1) {
      currentIndex = 0
    } else {
      currentIndex += 1
    }
    $(".image").css("z-index", -1)
    $(`#image${currentIndex}`).css("z-index", 0)
  }

  setInterval(function() {
    change()
  }, 7000)

  $(".image").css("z-index", -1)
  $(`#image${currentIndex}`).css("z-index", 0)
})
