let sellers = [
  {
    name: "bob",
    location: {
      city: "Montreal",
      country: "Canada"
    },
    items: [
      {
        itemid: 0,
        price: 30,
        description: "a very nice hat",
        shipsFrom: {
          city: "Quebec",
          country: "Canada"
        }
      },
      {
        itemid: 1,
        price: 300,
        description: "a fast bicycle",
        shipsFrom: {
          city: "Quebec",
          country: "Canada"
        }
      }
    ]
  },
  {
    name: "sue",
    location: {
      city: "Toronto",
      country: "Canada"
    },
    items: [
      {
        itemid: 5,
        price: 60,
        description: "A warm peacoat",
        shipsFrom: {
          city: "Vancouver",
          country: "Canada"
        }
      },
      {
        price: 30000,
        description: "A nice boat",
        itemid: 1,
        shipsFrom: {
          city: "Seoul",
          country: "Korea"
        }
      }
    ]
  }
]
// location has two properties: city and country
let elemOfItemLocation = function(location) {
  return React.createElement(
    "div",
    {},
    "ships from " + location.city + "," + location.country
  )
}

// item has 4 properties: description, price, id and shipsFrom
let elemOfItem = function(item) {
  return React.createElement(
    "div",
    {},
    React.CreateElement("h3", {}, item.description),
    React.CreateElement("h5", {}, item.price + "$"),
    React.CreateElement("div", {}, "id" + item.id),
    elemOfItemLocation(item.shipsFrom)
  )
}

// location has two properties: city and country
let elemOfSellerLocation = function(location) {
  return React.createElement(
    "div",
    {},
    "lives in " + location.city + "," + location.country
  )
}

// seller has three properties: name, location and items
let elemOfSeller = function(seller) {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, seller.name),
    elemOfSellerLocation(seller.location),
    seller.items.map(elemOfItem)
  )
}

let topLevel = sellers.map(elemOfSeller)
ReactDOM.render(topLevel, document.getElementById("root"))
