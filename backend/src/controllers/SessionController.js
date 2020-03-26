const conexao = require("../database/conexao");

module.exports = {
    async criar(request, response){
        const {id} = request.body;
        const ong = await conexao("ong")
            .where("id", id)
            .select("nome")
            .first();
        if (!ong) {
            return response.status(400).json({"erro": "Nenhuma ONG encontrada com este ID."});            
        }
        return response.json(ong);
    }
}