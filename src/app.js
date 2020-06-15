const express = require('express');
const stringFunctions = require('./lib/strings');
const numberFunctions = require('./lib/numbers');
const booleanFunctions = require('./lib/booleans');
const arrayFunctions = require('./lib/arrays');

const app = express();
app.use(express.json());

// Hello {{string}}

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: stringFunctions.sayHello(req.params.string) });
});

// uppercase

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: stringFunctions.uppercase(req.params.string) });
});

// lowercase

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: stringFunctions.lowercase(req.params.string) });
});

// first characters

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length === undefined) {
    res.json({ result: stringFunctions.firstCharacter(req.params.string) });
  } else {
    res.json({
      result: stringFunctions.firstCharacters(req.params.string, parseInt(req.query.length, 10)),
    });
  }
});

// Numbers

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (a || b === !NaN) {
    res.status(200).json({ result: numberFunctions.add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// subtract

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (a || b === !NaN) {
    res.status(200).json({ result: numberFunctions.subtract(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// multiply numbers

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numberFunctions.multiply(a, b) });
  }
});

// divides numbers

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numberFunctions.divide(a, b) });
  }
});

// remainders

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numberFunctions.remainder(a, b) });
  }
});

// BOOLEANS

// negate

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: booleanFunctions.negate(req.body.value) });
});

// truthiness

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: booleanFunctions.truthiness(req.body.value) });
});

// is odd

app.get('/booleans/is-odd/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: booleanFunctions.isOdd(req.params.number) });
  }
});

// starts with

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  if (req.params.char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res
      .status(200)
      .json({ result: booleanFunctions.startsWith(req.params.char, req.params.string) });
  }
});

// ARRAYS

// given index

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: arrayFunctions.getNthElement(req.params.index, req.body.array) });
});

// stringified array

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayFunctions.arrayToCSVString(req.body.array) });
});

// append

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: arrayFunctions.addToArray2(req.body.value, req.body.array) });
});

// starts with vowel

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: arrayFunctions.elementsStartingWithAVowel(req.body.array) });
});

// remove element

app.post('/arrays/remove-element', (req, res) => {
  if (req.query.index === undefined) {
    res.status(200).json({ result: arrayFunctions.removeNthElement2(0, req.body.array) });
  } else {
    res
      .status(200)
      .json({ result: arrayFunctions.removeNthElement2(req.query.index, req.body.array) });
  }
});

module.exports = app;
