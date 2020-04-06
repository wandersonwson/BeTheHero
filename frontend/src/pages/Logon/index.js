import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import heroisImg from "../../assets/herois.png";

export default function Logon() {
    const [id, setId] = useState("");
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const resposta = await api.post("sessao", { id });
            localStorage.setItem("ongId", id);
            localStorage.setItem("ongNome", resposta.data.nome);
            history.push("/profile");
        } catch (error) {
            alert("Falha no login, tente novamente.");
        }
    }
    return (
        <div className="container-logon">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button type="submit" className="botao">Entrar</button>
                    <Link className="link-voltar" to="/cadastro">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroisImg} alt="Heróis" />
        </div>
    );
}