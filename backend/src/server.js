const express = require('express');
const mongoose = require('mongoose');
const app = express ();
const routes = require('./routes')

mongoose.connect('mongodb+srv://alestan:712304@cluster0-ujmuu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// req.query acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição para criara, edição
// GET, POST, PUT, DELETE Existem esses: tipos diferentes de get
app.use(express.json());
app.use(routes);
app.listen(3333);

