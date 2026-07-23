const express = require('express');
const app = express();
const port = 3000;

app.get("/", (__,res)=>{
    res.send ('Hola, Estamos aprendiendo express con la ficha 3407184');
});

app.listen(port, ()=>{
    console.log(`Servidor en funcionamiento en el puerto: `);
});



