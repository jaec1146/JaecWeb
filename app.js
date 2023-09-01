const express = require('express');
const app = express();
const app2 = express()
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/');
})

app.get('/TwitterFollowCard', (req, res)=>{
    console.log('entre')
    res.static('proyects/twitter-follow-card/dist');
});

app.get('/TicTacToe', (req, res) => {
    res.render('proyects/tic-tac-toe/dist');
})

app.listen(port,()=>{
    console.log(`puerto: ${port}.`)
})