import React from 'react';
import ReactDOM from 'react-dom';

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
  return <div>{`Ships from ${location.city}, ${location.country}`}</div>;
};

let elemItem = function(item) {
  return (
    <div>
      <h3>{item.description}</h3>
      Price: {item.price}$<div>Item ID: {item.itemid}</div>
      {elemItemShippingLocation(item.shipsFrom)}
    </div>
  );
};

let elemSellerLocation = function(location) {
  return (
    <div>
      Seller location: {location.city}, {location.country}
    </div>
  );
};

let elemSeller = function(seller) {
  return (
    <div>
      <h1>{seller.name}</h1>
      {elemSellerLocation(seller.location)}
      {seller.items.map(elemItem)}
    </div>
  );
};

let sellerElements = sellers.map(elemSeller);

ReactDOM.render(sellerElements, document.getElementById('root'));
