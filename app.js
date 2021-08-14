let express = require ("express");
let app = express();
let path = require ("path");

app.use(express.static("public"));

app.listen(3030, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3030")
})

app.get("/",(req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
});
app.get("/berners-lee",(req, res) => {
    res.sendFile(path.resolve("./views/berners-lee.html"));
});
app.get("/clarke",(req, res) => {
    res.sendFile(path.resolve("./views/clarke.html"));
});
app.get("/hamilton",(req, res) => {
    res.sendFile(path.resolve("./views/hamilton.html"));
});
app.get("/hopper",(req, res) => {
    res.sendFile(path.resolve("./views/hopper.html"));
});
app.get("/lovelace",(req, res) => {
    res.sendFile(path.resolve("./views/lovelace.html"));
});
app.get("/turing",(req, res) => {
    res.sendFile(path.resolve("./views/turing.html"));
});