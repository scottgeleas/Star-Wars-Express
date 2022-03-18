const router = require('express').Router();

const characters = [
    {
        routeName: 'yoda',
        name: 'Yoda',
        role: 'Jedi Master',
        age: 900,
        forcePoints: 2000,
    },
    {
        routeName: 'darthmaul',
        name: 'Darth Maul',
        role: 'Sith Lord',
        age: 200,
        forcePoints: 1200,
    },
    {
        routeName: 'obiwankenobi',
        name: 'Obi Wan Kenobi',
        role: 'Jedi Master',
        age: 55,
        forcePoints: 1350,
    },
];

router.get('/characters', (req, res) => {
    res.json(characters);
});

router.get('/characters/:character', (req, res) => {
    const chosen = req.params.character;

    /* Check each character routeName and see if the same as "chosen"
   If the statement is true, send the character back as JSON,
   otherwise tell the user no character was found */
    for (let i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

router.post('/characters', (req, res) => {
    const newCharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name
        .replace(/\s+/g, '')
        .toLowerCase();

    characters.push(newCharacter);
    res.json(newCharacter);
});

module.exports = router;
