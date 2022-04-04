import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../contextos/UserContext";


import CheckImage from "./../assets/imagens/check.png"

const LINK_API_HABITOS = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

function HabitoDeHoje(props) {
    const { id, habito, feito, sequenciaAtual, maiorSequencia, atualizarPagina } = props;

    const { usuario } = useContext(UserContext);

    function concluirHabito() {
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }

        let promessa = null;
        if (!feito) {
            promessa = axios.post(`${LINK_API_HABITOS}/${id}/check`, {}, config);

            promessa.then((response) => {
                atualizarPagina();
            });

            promessa.catch((err) => {
                const { status, data } = err.response;
                alert(`Erro ao marcar o hábito como concluido.
                Erro ${status}: ${data.message} `);
            });
        }
        else {
            promessa = axios.post(`${LINK_API_HABITOS}/${id}/uncheck`, {}, config);

            promessa.then((response) => {
                atualizarPagina();
            });

            promessa.catch((err) => {
                const { status, data } = err.response;
                alert(`Erro ao marcar o hábito como não concluído.
                Erro ${status}: ${data.message} `);
            });
        }
    }

    const cores = {
        sequenciaAtual: "#666666",
        maiorSequencia: "#666666",
        botao: "#EBEBEB",
    }

    if (feito) {
        cores.sequenciaAtual = "#8FC549";
        cores.botao = "#8FC549";
    }

    if (feito && sequenciaAtual === maiorSequencia) {
        cores.maiorSequencia = "#8FC549";
    }

    return (
        <ArticleHabito>
            <Info>
                <h3>{habito}</h3>
                <div>
                    Sequência Atual: <SequenciaAtual cor={cores.sequenciaAtual}>{`${sequenciaAtual} ${sequenciaAtual === 1 ? "dia" : "dias"}`}</SequenciaAtual>
                </div>
                <div>
                    Seu recorde: <MaiorSequencia cor={cores.maiorSequencia}>{`${maiorSequencia} ${maiorSequencia === 1 ? "dia" : "dias"}`}</MaiorSequencia>
                </div>
            </Info>
            <BotaoConcluir cor={cores.botao} onClick={concluirHabito}>
                <img src={CheckImage} alt="concluir" />
            </BotaoConcluir>

        </ArticleHabito>
    )
}

export default HabitoDeHoje;

const ArticleHabito = styled.article`
    width: 340px;
    height: fit-content;

    background: var(--cor-bg-habito);
    border-radius: 5px;

    padding-top: 13px;
    padding-bottom: 13px;

    margin-bottom: 10px;

    display: flex;
    justify-content: center;
`;

const Info = styled.div`

    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;

        color: var(--cor-habito);

        margin-bottom: 13px;

        width: 210px;

    }

    div {
        font-weight: 400;
        font-size: 12.976px;
        line-height: 13px;
        
        color: var(--cor-habito);
    }

`;

const SequenciaAtual = styled.span`
    color: ${(props) => props.cor};
`;

const MaiorSequencia = styled.span`
    color: ${(props) => props.cor};
`;

const BotaoConcluir = styled.button`
    width: 69px;
    height: 69px;

    background-color: ${(props) => props.cor};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 30px;

    border: 1px solid #E7E7E7;
    border-radius: 5px;

    img{
        width: 35px;
        height: 28px;
    }
`;

