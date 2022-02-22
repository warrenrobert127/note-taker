const router = require('express').Router();

// const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');

const { notes } = require('../db/db.json');

//delete later
/*router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results); */

router.get("/api/notes", function (req, res) {
  return res.sendFile(path.json(__dirname, "db/db.json"));
});
module.exports = router; 