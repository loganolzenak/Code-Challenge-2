const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joke = require('../modules/joke');

let jokes = [
    {
      whoseJoke: "Danny",
      question: "Why do scuba divers fall backwards out of boats?",
      punchLine: "If they fell forwards they’d still be in the boat!"
    },
    {
      whoseJoke: "Luke",
      question: "Twofish are in a tank. What did one fish say to the other?",
      punchLine: "Do you know how to drive this thing?"
    },
    {
      whoseJoke: "Millie",
      question: "What do you call a pile of cats?",
      punchLine: "A meowntain!"
    },
    {
      whoseJoke: "dEv",
      question: "Why should you not play cards in the forest?",
      punchLine: "Too many Cheetahs!"
    },
    {
      whoseJoke: "Scott",
      question: "I went to the zoo the other day, it had one dog...",
      punchLine: "It was a shih tzu."
    }
  ];

// router.post('/', (req, res) => {
//     console.log(req.body);
//     //**this will need to be added - const jokeObject = new jokes(whoesJoke, jokeQuestion, punchLine)
//     //**this will need to be added - console.log(jokeObject.result);
//     //**this will need to be added - history.push(jokeObject);
//     res.sendStatus(201);
    
// })

router.post('/', (req, res) => {
  console.log(req.body, 'in post router')
  // look at request
  const data = req.body;
  //make a calculation object
  const myJokeBread = new Joke(data.whoseJoke, data.question, data.punchLine);
  console.log(myJokeBread.result);
  //push to history
  jokes.push(myJokeBread);
  res.sendStatus(201);
})

router.get('/', (req, res) => {
    res.send(jokes)
});

module.exports = router;