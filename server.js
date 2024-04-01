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
//endpoint 1 / rutas GET items por ID
app.get('/items', (req, res) =>{
    console.log()
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
app.put('/items/:id', (req, res) =>{
    const index = req.params.id;
    console.log(index);
    const nuevoItem = req.body.item;
    console.log(nuevoItem);
    if (index >= 0 && index < items.length && nuevoItem) {
        items[index] = nuevoItem;
        res.status(200).send(`Fruta actualizada en la posición ${index} a: ${nuevoItem}\n Lista: ${JSON.stringify(items)}`);
    } else {
        res.status(400).send('Error al actualizar la fruta');
    }
});
//endpoint 4 / rutas DELETE
app.delete('/items/:index', (req, res) =>{
    console.log(req.params['index']);
    const index = req.params['index'];
    if (index >= 0 && index < items.length) {
        const [eliminarItem] = items.splice(index, 1);
        res.status(201).send(`Fruta eliminado ${eliminarItem}\n Lista: ${JSON.stringify(items)}`);
    } else {
        res.status(404).send('Error al eliminar');
    }
});
//escuchar en el puerto 30000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Servidor en funcionando en puerto: ${PORT}`) });