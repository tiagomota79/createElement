import React from 'react';
import ReactDOM from 'react-dom';

let datingProfiles = [
  {
    lookingFor: { gender: 'female', kids: 'not ok', smoking: false },
    gender: 'male',
    name: 'Peter Bob',
    occupation: {
      title: 'teacher',
      salary: '30000',
      location: {
        city: 'Montreal',
        province: 'Quebec',
        country: 'Canada',
      },
    },
  },
  {
    lookingFor: { gender: 'male', kids: 'ok', smoking: false },
    gender: 'female',
    name: 'Jessica Sue',
    occupation: {
      title: 'manager',
      salary: '80000',
      location: {
        city: 'Toronto',
        province: 'Ontario',
        country: 'Canada',
      },
    },
  },
  {
    lookingFor: { gender: 'female', kids: 'ok', smoking: false },
    gender: 'female',
    name: 'Grace Smith',
    occupation: {
      title: 'CEO',
      salary: '900000',
      location: {
        city: 'Vancouver',
        province: 'British Colombia',
        country: 'Canada',
      },
    },
  },
];
window.datingProfiles = datingProfiles;

//Location has properties city, province and country
let elemLocation = function(location) {
  return (
    <div>
      {location.city}, {location.province}, {location.country}
    </div>
  );
};

//Occupation has properties title, salary and location
let elemOcc = function(occupation) {
  return (
    <div>
      {occupation.title[0].toUpperCase() + occupation.title.slice(1)} from
      {elemLocation(occupation.location)}
      Salary: {occupation.salary}$
    </div>
  );
};

//Looking For has properties gender, kids and smoking
let elemLookingFor = function(lookingFor) {
  return (
    <div>
      {lookingFor.gender},{' '}
      {lookingFor.kids === 'ok' ? 'can have kids' : 'without kids'}, smoking{' '}
      {lookingFor.smoking === false ? 'unnacepted' : 'accepted'}
    </div>
  );
};

//Dating profile has properties lookingFor, gender, name and occupation
let elemDatingProfiles = function(datingProfile) {
  return (
    <div>
      <h1>{datingProfile.name}</h1>
      <div>{elemOcc(datingProfile.occupation)}</div>
      <h3>Looking for: {elemLookingFor(datingProfile.lookingFor)}</h3>
    </div>
  );
};

let profilesElements = datingProfiles.map(elemDatingProfiles);

ReactDOM.render(profilesElements, document.getElementById('root'));
