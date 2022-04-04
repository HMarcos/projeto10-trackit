import { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "../contextos/UserContext";
import HabitContext from "../contextos/HabitContext";

import BotaoDiaDaSemana from "./BotaoDiaDaSemana";

const LINK_API_HABITOS = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

function NovoHabito({ atualizarPagina }) {
    const { novoHabito, setNovoHabito } = useContext(HabitContext);
    const { usuario } = useContext(UserContext);

    const [loading, setLoading] = useState(false);

    function esconderNovoHabito() {
        setNovoHabito({ ...novoHabito, visivel: false });
    }

    function salvarHabito(event) {
        event.preventDefault();

        if (novoHabito.dados.days.length === 0) {
            alert("Selecione 1 ou mais dias da semana para o seu novo hábito!");
        }
        else {

            const config = {
                headers: {
                    Authorization: `Bearer ${usuario.token}`
                }
            }

            setLoading(true);

            const promessa = axios.post(LINK_API_HABITOS, novoHabito.dados, config);

            promessa.then((response) => {

                setLoading(false);
                setNovoHabito({
                    visivel: false,
                    dados: {
                        name: "",
                        days: []
                    }
                })

                atualizarPagina();
            })

            promessa.catch((err) => {
                const { status, data } = err.response;

                alert(`Não foi possível realizar o cadastro do novo hábito.
            Erro ${status}: ${data.message} `);

                setLoading(false);
            })

        }
    }

    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

    const botoesDiaDaSemana = diasDaSemana.map((diaDaSemana, index) =>
        <BotaoDiaDaSemana
            key={index}
            id={index}
            sigla={diaDaSemana}
            disabled={loading}
        />
    )

    const botaoSalvar = loading ? <ThreeDots color="white" height={11} width={43} /> : "Salvar";

    return (
        <Container>
            <FormularioNovoHabito onSubmit={salvarHabito}>
                <input
                    type="text"
                    placeholder="nome do hábito"
                    required
                    disabled={loading}
                    value={novoHabito.dados.name}
                    onChange={(event) => {
                        setNovoHabito({
                            ...novoHabito,
                            dados: {
                                ...novoHabito.dados,
                                name: event.target.value
                            }
                        })
                    }}
                ></input>

                <BotoesDiaDaSemana>
                    {botoesDiaDaSemana}
                </BotoesDiaDaSemana>

                <BotoesFormulario>
                    <input
                        type="button"
                        value={"Cancelar"}
                        onClick={esconderNovoHabito}
                        disabled={loading}>
                    </input>

                    <button
                        type="submit"
                        disabled={loading}>
                        {botaoSalvar}
                    </button>
                </BotoesFormulario>
            </FormularioNovoHabito>
        </Container>
    )
}

export default NovoHabito;

const Container = styled.div`
    width: 340px;
    height: 180px;

    background: var(--cor-bg-form-novo-habito);
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;


const FormularioNovoHabito = styled.form`
    width: min-content;
    display: flex;
    flex-direction: column;

    input[type=text]{
        width: 303px;
        height: 45px;

        font-size: 20px;
        line-height: 25px;

        background-color: var(--cor-bg-input);
        border: var(--borda-input);
        border-radius: var(--borda-input-radius);

        color: var(--cor-input);

        padding-left: 11px;

    }

    input[type=text]:disabled{
        background-color: var(--cor-bg-input-disabled);
    }

    input[type=text]::placeholder{
        color: var(--cor-input-placeholder);
    }
`;

const BotoesDiaDaSemana = styled.div`
    display: flex;

    margin-top: 8px;
    margin-bottom: 30px;
`;

const BotoesFormulario = styled.div`
     
     display: flex;
     align-items: center;
     justify-content: flex-end;
     
     input[type=button]{
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        

        text-align: center;

        color:var(--cor-bg-botoes);
        background-color: inherit;
        border: none;

        margin-right: 24px;

        cursor: pointer;
     }

     button{
        width: 84px;
        height: 35px;

        font-size: 15.976px;
        line-height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border: none;
        background-color: var(--cor-bg-botoes);
        color: var(--cor-botoes);

        border-radius: var(--border-radius-botoes);
    }
`;