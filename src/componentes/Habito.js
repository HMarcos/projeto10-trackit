import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contextos/UserContext";

import Lixeira from "./../assets/imagens/lixeira.png"

const LINK_API_HABITOS = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

function Habito(props) {
    const { id, habito, dias, atualizarPagina } = props;

    const { usuario } = useContext(UserContext);

    function deletarHabito() {
        const confirmacao = window.confirm("Deseja realmente deletar esse hábito?");

        if (confirmacao) {
            const config = {
                headers: {
                    Authorization: `Bearer ${usuario.token}`
                }
            };

            const promessa = axios.delete(`${LINK_API_HABITOS}/${id}`, config);

            promessa.then((response) => {
                console.log(response.data);
                console.log("Hábito deletado com sucesso!");
                atualizarPagina();
            })

            promessa.catch((err) => {
                const { status, data } = err.response;
                alert(`Não foi possível deletar o hábito.
                Erro ${status}: ${data} `);
            })
        }
    }

    const todosDiasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

    const diasDaSemana = todosDiasDaSemana.map((dia, index) =>
        <DiaDaSemana
            key={index}
            selecionado={dias.includes(index)}>
            {dia}
        </DiaDaSemana>);


    return (
        <ArticleHabito>
            <Container>
                <h3>{habito}</h3>
                <DiasDaSemana>
                    {diasDaSemana}
                </DiasDaSemana>
                <BotaoDeletarHabito onClick={deletarHabito}>
                    <img src={Lixeira} alt="apagar habito" />
                </BotaoDeletarHabito>
            </Container>
        </ArticleHabito>
    )
}

export default Habito;

function definirBackgrounColor(selecionado) {
    if (selecionado) {
        return "#DBDBDB";
    }

    return "#FFFFFF";
}

function definirColor(selecionado) {
    if (selecionado) {
        return "#FFFFFF";
    }

    return "#DBDBDB";
}

const ArticleHabito = styled.article`
    width: 340px;
    height: fit-content;

    background: var(--cor-bg-habito);
    border-radius: 5px;

    padding-top: 13px;
    padding-bottom: 15px;

    margin-bottom: 10px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    position: relative;

    h3 {
        max-width: 290px;
        
        font-weight: 400;
        font-size: 20px;    
        line-height: 25px;

        color: var(--cor-habito);
    }
`;

const BotaoDeletarHabito = styled.button`
    position: absolute;

    right: 10px;
    top: 0px;

    background-color: inherit;
    
    img {
        width: 13px;
        height: 15px;
    }
`;

const DiasDaSemana = styled.div`
    display: flex;
    margin-top: 8px;
`;

const DiaDaSemana = styled.div`
    width: 30px;    
    height: 30px;

    border: var(--borda-input);
    border-radius: var(--borda-input-radius);

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: ${(props) => definirBackgrounColor(props.selecionado)};
    color: ${(props) => definirColor(props.selecionado)};

    margin-right: 4px;
`;