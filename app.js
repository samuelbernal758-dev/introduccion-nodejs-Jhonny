const express = require('express');
const app = express();
const port = 3000;

app.use (express.json());

app.get("/", (__,res)=>{
    res.send ("API de Aprendices, EndPoint Principal");
});

const listaaprendices = [{
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
app.post('/aprendicescreado', (req, res) => {
    const { nombre, edad, correo, imgperfil } = req.body;
    
    if (typeof nombre !== 'string' || nombre.trim().length < 3) {
        return res.status(400).json({ "error": "El nombre como mínimo necesita 3 letras" });
    }
    
    if (typeof correo !== 'string' || !correo.includes('@')) {
        return res.status(400).json({ "error": "El correo necesita @" });
    }
    
    const datosAprendiz = { nombre, edad, correo, imgperfil };
    listaaprendices.push(datosAprendiz);
    
    return res.status(201).json({ "mensaje": "Aprendiz creado", "Datos": datosAprendiz });
});

app.listen(port, ()=>{
    console.log(`Servidor: http://localhost:${port} `);
});


 