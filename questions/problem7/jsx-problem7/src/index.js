import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { touristAttractions } from './data';

//attraction has properties name, location, visitorPerYear, entrancePrice and picture
let elemAttraction = function(attraction) {
  return (
    <div id='container'>
      <div id='imgcontainer'>
        <img src={attraction.picture} />
        <h1 id='name'>{attraction.name}</h1>
        <div id='text'>
          The <b>{attraction.name}</b> in {attraction.location.city} (
          {attraction.location.country}) receives{' '}
          {attraction.visitorsPerYear
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}{' '}
          visitors per year, who pay {attraction.entrancePrice}$ to see it.{' '}
          {Math.max.apply(
            Math,
            touristAttractions.map(function(value) {
              return value.visitorsPerYear;
            })
          ) === attraction.visitorsPerYear ? (
            <b>It's the most visited attraction in the world.</b>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

let attractionCards = touristAttractions.map(elemAttraction);

ReactDOM.render(attractionCards, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
