let sellers = [
  {
    name: 'bob',
    location: {
      city: 'Montreal',
      country: 'Canada',
    },
    items: [
      {
        itemid: 0,
        price: 30,
        description: 'a very nice hat',
        shipsFrom: {
          city: 'Quebec',
          country: 'Canada',
        },
      },
      {
        itemid: 1,
        price: 300,
        description: 'a fast bicycle',
        shipsFrom: {
          city: 'Quebec',
          country: 'Canada',
        },
      },
    ],
  },
  {
    name: 'sue',
    location: {
      city: 'Toronto',
      country: 'Canada',
    },
    items: [
      {
        itemid: 5,
        price: 60,
        description: 'A warm peacoat',
        shipsFrom: {
          city: 'Vancouver',
          country: 'Canada',
        },
      },
      {
        price: 30000,
        description: 'A nice boat',
        itemid: 1,
        shipsFrom: {
          city: 'Seoul',
          country: 'Korea',
        },
      },
    ],
  },
];

let elemItemShippingLocation = function(location) {
  return React.createElement(
    'div',
    {},
    `Ships from ${location.city}, ${location.country}`
  );
};

let elemItem = function(item) {
  return React.createElement(
    'div',
    {},
    React.createElement('h3', {}, item.description),
    `Price: ${item.price}$`,
    React.createElement('div', {}, `Item ID: ${item.itemid}`),
    elemItemShippingLocation(item.shipsFrom)
  );
};

let elemSellerLocation = function(location) {
  return React.createElement(
    'div',
    {},
    `Seller location: ${location.city}, ${location.country}`
  );
};

let elemSeller = function(seller) {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, seller.name),
    elemSellerLocation(seller.location),
    seller.items.map(elemItem)
  );
};

let sellerElements = sellers.map(elemSeller);

ReactDOM.render(sellerElements, document.getElementById('root'));
