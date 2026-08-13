const express = require('express');
const app = express();
const port = 3000;

app.get("/", (__,res)=>{
    res.send ("API de Aprendices, EndPoint Principal");
});

const ListaAprendices = [{
        "nombre": "Juan",
        "Edad":  "17",
        "Correo": "juan@gmail.com",
        "imgPerfil": "url"
    },
    {
        "nombre": "Derly",
        "Edad":  "19",
        "Correo": "Maday@gmail.com",
        "imgPerfil": "url"
    },
    {
        "nombre": "Sebastian",
        "Edad":  "17",
        "Correo": "sebas@gmail.com",
        "imgPerfil": "url"
    }]
app.get("/aprendices", (req, res) =>{
    res.json(ListaAprendices)
})
app.get('/aprendices/:nombre', (req, res) => {
    const nombreBuscado = req.params.nombre.toLowerCase();

    const aprendizencontrado = ListaAprendices.find(
        (aprendiz) => aprendiz.nombre.toLowerCase() === nombreBuscado
    );
    res.json(aprendizencontrado);
    
});
app.post("/aprendices", (req, res) =>{ 
    const datosAprendiz = req.body
    res.json({"Mensaje": "Aprendiz creado", "Datos": datosAprendiz})
})

app.listen(port, ()=>{
    console.log(`Servidor: http://localhost:${port} `);
});


 