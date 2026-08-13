const express = require('express');
const app = express();
const port = 3000;

app.get("/", (__,res)=>{
    res.send ("API de Aprendices, EndPoint Principal");
});

app.get("/aprendices", (req, res) => {
    res.json([{
        "nombre": "Juan Camila",
        "Edad":  "17",
        "Correo": "juan@gmail.com",
        "imgPerfil": "url"
    },
    {
        "nombre": "Derly Maday",
        "Edad":  "19",
        "Correo": "Maday@gmail.com",
        "imgPerfil": "url"
    },
    {
        "nombre": "Sebastian Gonzalez",
        "Edad":  "17",
        "Correo": "sebas@gmail.com",
        "imgPerfil": "url"
    }])
})

app.listen(port, ()=>{
    console.log(`Servidor: http://localhost:${port} `);
});


 