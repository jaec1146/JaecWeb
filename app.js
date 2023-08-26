const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/');
})

app.get('/TwitterFollowCard', (req, res) => {
    res.render('proyects/twitter-follow-card/dist');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);   
})
