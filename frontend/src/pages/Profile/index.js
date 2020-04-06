import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Profile() {
    const history = useHistory();
    const [casos, setCasos] = useState([]);
    const ongId = localStorage.getItem("ongId");
    const ongNome = localStorage.getItem("ongNome");
    useEffect(() => {
        api.get("profile", {
            headers: {
                Authorization: ongId,
            }
        }).then(resposta => {
            setCasos(resposta.data);
        })
    }, [ongId]);
    async function handleDeleteCaso(id) {
        try {
            await api.delete(`caso/${id}`, { headers: { Authorization: ongId}});
            setCasos(casos.filter(caso => caso.id !== id));
        } catch (error) {
            alert("Erro ao deletar caso, tente novamente.");
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push("/");
    }
    return (
        <div className="container-profile">
            <header>
                <img src={logoImg} alt="Be The Heroe" />
                <span>Bem vinda, {ongNome}</span>
                <Link className="botao" to="/caso/novo">Novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {casos.map(caso => (
                    <li key={caso.id}>
                        <strong>CASO</strong>
                        <p>{caso.titulo}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{caso.descricao}</p>
                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(caso.valor)}</p>
                        <button onClick={() => handleDeleteCaso(caso.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}