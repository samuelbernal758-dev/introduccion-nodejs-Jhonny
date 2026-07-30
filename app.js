import express from 'express';
import dotenv from 'dotenv';

// Const bodyParser = require(`body-Parser`);//importacion commonjs
import bodyParser from "body-Parser";//Importacion ES "module"
dotenv.config();

const app = express();
const port = process.env.PORT || 3030; // Cambiado a 3030 por tu requerimiento previo

// Middlewares para procesar datos JSON y formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

export const Saludo = "Hola, estamos aprendiendo express con la ficha 3407184";

app.get("/", (req, res) => {
    res.send(Saludo);
});

app.get("/productos", (req, res) => {
    res.send(`
        <h1>Listado de Productos</h1>
        <ul>
            <li>Televisor</li>
            <li>Celular</li>
            <li>Impresora</li>
        </ul>
    `);
});

app.get("/productos/:nombre", (req, res)=>{
    const producto = req.params.nombre
    const id_producto = req.params.id_producto
    const precio_producto = req.params.precio_producto
    res.send ( `<h1> Informacion del producto </h1>
        <ol>
        <li> Producto: ${producto} <li>
        <li> Id: ${id_producto} </li>
        <li> Precio: ${precio_producto} </li>
        </ol> ` )
})

app.get("/Saludo/:name", (req, res)=>{
    const name = req.params.name
   res.send(`Hola ${name}`)
});

app.get("/categoria/:categoria/:id", (req, res)=>{
    const categoria_producto = req.params.categoria
    const id_categoria = req.params.id
    res.send(`<h1> Categoria del Producto </h1>
        <ol>
        <li> categortia: ${categoria_producto} </li>
        <li> Id: ${id_categoria} </li>
        </ol>`)

})
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});
/*
http://localhost:3000
*/
