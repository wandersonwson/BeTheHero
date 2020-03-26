const express = require("express");
const OngController = require("./controllers/OngController");
const CasoController = require("./controllers/CasoController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const rotas = express.Router();

rotas.post("/sessao", SessionController.criar);
rotas.get("/ong", OngController.listar);
rotas.post("/ong", OngController.criar);
rotas.get("/profile", ProfileController.listar);
rotas.get("/caso", CasoController.listar);
rotas.post("/caso", CasoController.criar);
rotas.delete("/caso/:id", CasoController.deletar);

module.exports = rotas;