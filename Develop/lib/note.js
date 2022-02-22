const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
  let storedNotesArray = [];
  let filteredResults = notesArray;
  if (query.personalityTraits) {
    if (typeof query.personalityTraits === "string") {
      storedNotesArray = [query.personalityTraits];
    } else {
      storedNotesArray = query.personalityTraits;
    }
    console.log(storedNotesArray);
    storedNotesArray.forEach((trait) => {
      filteredResults = filteredResults.filter(
        (animal) => animal.personalityTraits.indexOf(trait) !== -1
      );
    });
  }
  if (query.diet) {
    filteredResults = filteredResults.filter(
      (animal) => animal.diet === query.diet
    );
  }
  if (query.species) {
    filteredResults = filteredResults.filter(
      (animal) => animal.species === query.species
    );
  }
  if (query.name) {
    filteredResults = filteredResults.filter(
      (animal) => animal.name === query.name
    );
  }
  return filteredResults;
}
