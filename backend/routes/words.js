const router = require('express').Router();
let Word = require('../models/words.model')

router.route('/').get((req, res) => {
    Word.find()
        .then(words => res.json(words))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const word = req.body.word;
    const translation = req.body.translation


    const newWord = new Word({
        word,
        translation
    });

    newWord.save()
        .then(() => res.json('A new word has been added'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req, res) => {
    Word.findById(res.params.id)
        .then(word => res.json(word))
        .catch(err => res.status(400).json('Error:  ' + err));
});

module.exports = router;
