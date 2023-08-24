const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('proyects/twitter-follow-card/dist/assets'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);   
})
