const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/');
})

router.get('/TwitterFollowCard', (req, res) => {
    res.render('proyects/twitter-follow-card/dist/index.html');
})

router.get('/TicTacToe', (req, res) => {
    res.render('/proyects/tic-tac-toe/dist/index.html');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);   
})
