import 'dotenv/config'
import express from 'express';

const app = express();
const port = 3000;

app.get("/", (__,res)=>{
    res.send ('Hola, Estamos aprendiendo express con la ficha 3407184');
});

app.listen(port, ()=>{
    console.log(`Servidor en funcionamiento en el puerto: ${port} `);
});

app.get("/datos_personales", (req, res) => {
    res.json({"Datos Perosnales":{"Nombre": "Samuel", "Apellido": "Bernal", "Lista de Telefonos": {
            "telefono 1" : "3197929060",
            "telefono 2": "3142940329"
    }},
    "Datos Programa":{
        "nombre": "ADSO", "Tipo de programa": "Analisis y Desarrollo de Software", "ficha": "3407184"
    }})
});