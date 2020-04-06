import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState();
    const history = useHistory();

    async function handleCadastro (e) {
        e.preventDefault();
        const dados = {
            nome,
            email,
            whatsapp,
            cidade,
            uf
        };
        try {
            const resposta = await api.post("ong", dados);
            alert (`Seu ID de acesso: ${resposta.data.id}`);
            history.push("/");
        } catch (error) {
            alert("Erro no cadastro, tente novamente");
        }
    }
    return (
        <div className="container-cadastro">
            <div className="conteudo">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="link-voltar" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleCadastro}>
                    <input placeholder="Nome da ONG" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                    <div className="grupo-input">
                        <input placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                        <input placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} />
                    </div>
                    <button className="botao" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}