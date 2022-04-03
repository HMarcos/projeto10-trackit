import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "../contextos/UserContext";

import LogoTrackIt from "./../assets/imagens/TrackIt.png"


const LINK_API_LOGIN = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

function TelaLogin() {

    const [login, setLogin] = useState(
        {
            email: "",
            password: ""
        }
    )
    const [loading, setLoading] = useState(false);
    const { setUsuario } = useContext(UserContext);

    const navigate = useNavigate();

    function logar(event) {

        event.preventDefault();

        setLoading(true);

        const promessa = axios.post(LINK_API_LOGIN, login);

        promessa.then((response) => {
            const { data } = response;
            
            setUsuario(data);
            navigate("/hoje");

        });

        promessa.catch((err) => {
            const { status, data } = err.response;
            alert(`Não foi possível realizar o login.
            Erro ${status}: ${data.message} `);

            setLoading(false);
        }

        )

    }

    const botao = loading ? <ThreeDots color="white" height={13} width={51} /> : "Entrar";

    return (
        <Conteudo>
            <Logo src={LogoTrackIt} alt="TrackIt Logo" />

            <FormularioLogin onSubmit={logar}>
                <input
                    type="email"
                    placeholder="email"
                    required
                    disabled={loading}
                    value={login.email}
                    onChange={(event) => { setLogin({ ...login, email: event.target.value }) }}>
                </input>

                <input
                    type="password"
                    placeholder="senha"
                    required
                    disabled={loading}
                    value={login.password}
                    onChange={(event) => { setLogin({ ...login, password: event.target.value }) }}>
                </input>

                <button type="submit" disabled={loading}>
                    {botao}
                </button>
            </FormularioLogin>

            <Link to="/cadastro">
                <SpanLink>Não tem uma conta? Cadastre-se!</SpanLink>
            </Link>
        </Conteudo>
    )
}

export default TelaLogin;

const Conteudo = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 180px;
    height: 178.38px;

    margin-bottom: 33px;
`;

const FormularioLogin = styled.form`
    width: min-content;
    margin-bottom: 25px;
    
    input{
        width: 303px;
        height: 45px;

        padding-left: 11px;

        font-size: 20px;
        line-height: 25px;

        background-color: var(--cor-bg-input);
        border: var(--borda-input);
        border-radius: var(--borda-input-radius);

        color: var(--cor-input);

        margin-bottom: 6px;

    }

    input:disabled{
        background-color: var(--cor-bg-input-disabled);
    }

    input::placeholder{
        color: var(--cor-input-placeholder);
    }

    button{
        width: 303px;
        height: 45px;

        font-size: 21px;
        line-height: 26px;

        background-color: var(--cor-bg-botoes);
        color: var(--cor-botoes);

        border-radius: var(--border-radius-botoes);

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const SpanLink = styled.span`
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: var(--cor-link);
`;