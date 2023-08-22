const express = require('express');
const app = express();
const port = process.env.PORT ?? 8080;

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);

    MyButton()
})

function MyButton() {
    return (
      <button>
        Soy un botón
      </button>
    );
  }
  
export default function MyApp() {
return (
    <div>
    <h1>Bienvenido a mi aplicación</h1>
    <MyButton />
    </div>
);
}