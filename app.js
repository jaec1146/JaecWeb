const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('proyects/twitter-follow-card/dist'))

app.get('/', (req, res) => {
    res.redirect('/proyects/twitter-follow-card/dist');
})

app.get('/TwitterFollowCard', (req, res)=>{
    console.log('entre')
    express.static('proyects/twitter-follow-card/dist');
});

app.get('/TicTacToe', (req, res) => {
    res.render('/proyects/tic-tac-toe/dist/index.html');
})

app.listen(port,()=>{
    console.log(`puerto: ${port}.`)
})