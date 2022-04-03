import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import LogoTrackIt from "./../assets/imagens/TrackIt.png"


const LINK_API_CADASTRO = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

function TelaCadastro(props) {

    props.definirBackground();

    const [cadastro, setCadastro] = useState(
        {
            email: "",
            name: "",
            image: "",
            password: ""
        }
    )

    const [cadastrando, setCadastrando] = useState(false);

    const navigate = useNavigate();

    function cadastrar(event) {

        event.preventDefault();

        setCadastrando(true);

        const promessa = axios.post(LINK_API_CADASTRO, cadastro);

        promessa.then((response) => {
            navigate("/");

        });

        promessa.catch((err) => {
            const { status, data } = err.response;
            alert(`Não foi possível realizar o cadastro.
            Erro ${status}: ${data} `);

            setCadastrando(false);
        }

        )

    }

    const botao = cadastrando ? <ThreeDots color="white" height={13} width={51}/> : "Cadastrar";

    return (
        <Conteudo>
            <Logo src={LogoTrackIt} alt="TrackIt Logo" />

            <FormularioCadastro onSubmit={cadastrar}>
                <input
                    type="email"
                    placeholder="email"
                    required
                    disabled={cadastrando}
                    value={cadastro.email}
                    onChange={(event) => { setCadastro({ ...cadastro, email: event.target.value }) }}>
                </input>

                <input
                    type="password"
                    placeholder="senha"
                    required
                    disabled={cadastrando}
                    value={cadastro.password}
                    onChange={(event) => { setCadastro({ ...cadastro, password: event.target.value }) }}>
                </input>

                <input
                    type="text"
                    placeholder="nome"
                    required
                    disabled={cadastrando}
                    value={cadastro.name}
                    onChange={(event) => { setCadastro({ ...cadastro, name: event.target.value }) }}>
                </input>

                <input
                    type="url"
                    placeholder="foto"
                    required
                    disabled={cadastrando}
                    value={cadastro.image}
                    onChange={(event) => { setCadastro({ ...cadastro, image: event.target.value }) }}>
                </input>
                <button type="submit" disabled={cadastrando}>
                    {botao}
                </button>
            </FormularioCadastro>

            <Link to="/">
                <SpanLink>Já tem uma conta? Faça login!</SpanLink>
            </Link>
        </Conteudo>
    )
}

export default TelaCadastro;

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

const FormularioCadastro = styled.form`
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