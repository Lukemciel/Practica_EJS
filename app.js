const express = require("express");
const app = express();
const path = require("path");
const port = 3040;

app.use(express.static('public'));
app.set('view engine', 'ejs');

const mainRoutes = require('./routes/main.routes')


app.use('/', mainRoutes)


app.listen(port, () => (console.log(`corriendo puerto http://localhost:${port}`)))