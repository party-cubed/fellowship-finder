const { Router } = require('express');
const { Sheets } = require('../db/models.js');

const Sheet = Router();

Sheet.get('/:userId', (req, res) => {
  const { userId } = req.params;

  Sheets.findAll({ where: { userId } })
    .then((sheetArr) => {
      res.status(200)
        .send(sheetArr);
    })
    .catch((err) => {
      console.error('Failed to FIND character sheets by userId:', err);
      res.sendStatus(500);
    });
});

Sheet.post('/', (req, res) => {
  const { sheet } = req.body;

  Sheets.create(sheet)
    .then((charSheet) => {
      res.status(201)
        .send(charSheet);
    })
    .catch((err) => {
      console.error('Failed to CREATE character sheet:', err);
      res.sendStatus(500);
    });
});

Sheet.delete('/:id', (req, res) => {
  const { id } = req.params;

  Sheets.destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('Failed to DELETE character sheet:', err);
      res.sendStatus(500);
    });
});

module.exports = Sheet;
