const crypto = require("crypto");
const conexao = require("../database/conexao");

module.exports = {
    async listar(request, response) {
        const ongs = await conexao("ong").select("*");
        return response.json(ongs);
    },
    async criar(request, response) {
        const {nome, email, whatsapp, cidade, uf} = request.body;
        const id = crypto.randomBytes(4).toString("HEX");
        await conexao("ong").insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf
        });
        return response.json({id});
    }    
}