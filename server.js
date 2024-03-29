// importar express bodyparser
const express = require('express');
const bodyParser = require('body-parser');
//inicializa
const app =express();

app.use(bodyParser.json());

//ruta de ejemplo
// app.get('/', (req, res) =>{
//     res.send("hola con nodejs");
// });
let items = ['manzana','papaya','limon'];
app.get('/', (req, res) =>{
    res.send("hola con nodejs");
});
//endpoint 1 / rutas GET
app.get('/items', (req, res) =>{
    res.status(200).json(items);
});
//endpoint 2 / rutas POST
app.post('/items', (req, res) =>{
    const fruta = req.body; 
    if (fruta) {
        items.push(fruta.item);
        // res.status(200).send(`Se agrego la fruta: ${fruta.item}`);
        res.status(200).send(`Se agrego la fruta: ${fruta.item} \n Lista: ${JSON.stringify(items)}`);
    } else {
        res.status(400).send("este item es invalido");
    }
});
//endpoint 3 / rutas PUT
app.put('/items', (req, res) =>{

});
//endpoint 4 / rutas DELETE
app.delete('/items/:index', (req, res) =>{
    console.log(req.params['index']);
});
//escuchar en el puerto 30000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Servidor en funcionando en puerto: ${PORT}`) });