import express from 'express';

const app = express();
const port = 3030;

export const Saludo = "Hola, estamops aprendiendo exress con la ficha 3407184"

app.get("/", (__,res)=>{
    res.send (Saludo);
});

app.listen(port, ()=>{
    console.log(`Servidor en funcionamiento en el puerto : ${port}`);
});

/*
http://localhost:3000
*/


