// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
    .then((response) => { 
      setResult(response.data);
    })
    .catch((error) => {
      setError("Error!");
    });
}

// listPets();
const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }

  axios.get(`https://petdibs.herokuapp.com/pets/${selectedPet}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError("failed details");
    });
}

console.log(showDetails(4));

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }
  
  axios.delete(`https://petdibs.herokuapp.com/pets/${selectedPet}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError("failed remove");
    });
}

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("failed add");
  });
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
