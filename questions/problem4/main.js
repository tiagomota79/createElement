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
        city: 'Vacouver',
        province: 'British Colombia',
        country: 'Canada',
      },
    },
  },
];

//Location has properties city, province and country
let elemLocation = function(location) {
  return (
    <div>
      From {location.city}, {location.province}, {location.country}
    </div>
  );
};

//Occupation has properties title, salary and location
let elemOcc = function(occupation) {
  return (
    <div>
      Occupation: {occupation.title}
      Salary: {occupation.salary}
      {elemLocation(occupation.location)}
    </div>
  );
};

//Looking For has properties gender, kids and smoking
let elemLookingFor = function(lookingFor) {
  return (
    <div>
      Gender: {lookingFor.gender}
      Kids: {lookingFor.kids}
      Smoking: {lookingFor.smoking === false ? 'Unnacepted' : 'Accepted'}
    </div>
  );
};

//Dating profile has properties lookingFor, gender, name and occupation
let elemDatingProfiles = function(datingProfile) {
  return (
    <div>
      <h1>{datingProfiles.name}</h1>
      <h3>
        Looking for:
        {elemLookingFor(datingProfiles.lookingFor)}
      </h3>
      <div>{elemOcc(datingProfiles.occupation)}</div>
    </div>
  );
};

let profilesArray = datingProfiles.map(elemDatingProfiles);

ReactDOM.render(profilesArray, document.getElementById('root'));
