import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function NovoCaso() {
    const history = useHistory();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const ongId = localStorage.getItem("ongId");
    async function handleNovoCaso(e) {
        e.preventDefault();
        const dados = {
            titulo,
            descricao,
            valor
        };
        try {
            await api.post("/caso", dados, {headers: {Authorization: ongId}});
            history.push("/profile");
        } catch (error) {
            alert("Falha ao cadastrar o caso, tente novamente.")
        }
    }
    return (
        <div className="container-novocaso">
            <div className="conteudo">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="link-voltar" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o início
                    </Link>
                </section>
                <form onSubmit={handleNovoCaso}>
                    <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    <textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    <input placeholder="Valor em reais" value={valor} onChange={e => setValor(e.target.value)} />
                    <button className="botao" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}