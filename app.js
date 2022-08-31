const { response } = require("express")
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.listen(3000, () => {
    console.log("Iniciar servidor: puerto 3000");
})