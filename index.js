const express = require('express');
const app = express();
const port = 3000;


app.get("/zodiaco/:fechanacimiento", (req, res) => {
    let fecha = req.params.fechanacimiento
    let parte1 = parseInt(fecha.slice(0, 4));
    let parte3 = parseInt(fecha.slice(4, 6));
    let parte2 = parseInt(fecha.slice(6, 8) - 1);
    const fechaNum = new Date(parte1, parte2, parte3);
    let mes = fechaNum.getMonth();
    app.get("/zodiaco/:fechanacimiento", (req, res) => {
        let fecha = req.params.fechanacimiento;
        let parte1 = parseInt(fecha.slice(0, 4));
        let parte3 = parseInt(fecha.slice(4, 6));
        let parte2 = parseInt(fecha.slice(6, 8) - 1);
        const fechaNum = new Date(parte1, parte2, parte3);
        const mes = fechaNum.getMonth() + 1;
        var dia = fechaNum.getDate();


    });

    if ((mes == 2 && fechaNum.getDate() >= 21) || (mes == 3 && fechaNum.getDate() <= 20)) {
        res.send(`eres aries`);
    } else if ((mes == 3 && fechaNum.getDate() >= 21) || (mes == 4 && fechaNum.getDate() <= 20)) {
        res.send(`eres tauro`);
    } else if ((mes == 4 && fechaNum.getDate() >= 21) || (mes == 5 && fechaNum.getDate() <= 21)) {
        res.send(`eres geminis`);
    } else if ((mes == 5 && fechaNum.getDate() >= 22) || (mes == 6 && fechaNum.getDate() <= 21)) {
        res.send(`eres cancer`);
    } else if ((mes == 6 && fechaNum.getDate() >= 22) || (mes == 7 && fechaNum.getDate() <= 23)) {
        res.send(`eres leo`);
    } else if ((mes == 7 && fechaNum.getDate() >= 24) || (mes == 8 && fechaNum.getDate() <= 23)) {
        res.send(`eres virgo`);
    } else if ((mes == 8 && fechaNum.getDate() >= 24) || (mes == 9 && fechaNum.getDate() <= 23)) {
        res.send(`eres libra`);
    } else if ((mes == 9 && fechaNum.getDate() >= 24) || (mes == 10 && fechaNum.getDate() <= 22)) {
        res.send(`eres escorpio`);
    } else if ((mes == 10 && fechaNum.getDate() >= 23) || (mes == 11 && fechaNum.getDate() <= 21)) {
        res.send(`eres sagitario`);
    } else if ((mes == 11 && fechaNum.getDate() >= 22) || (mes == 0 && fechaNum.getDate() <= 19)) {
        res.send(`eres capricornio`);
    } else if ((mes == 0 && fechaNum.getDate() >= 21) || (mes == 1 && fechaNum.getDate() <= 19)) {
        res.send(`eres acuario`);
    } else if ((mes == 1 && fechaNum.getDate() >= 20) || (mes == 2 && fechaNum.getDate() <= 20)) {
        res.send(`eres piscis`);
    }
});

app.get("/chino/:fechachino", (req, res) => {
    res.send(req.params.fechachino)
});

app.listen(port, () => {
    console.log(`server listening port ${port}`)
});
