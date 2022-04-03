import { useContext } from "react";
import styled from "styled-components";

import HabitContext from "../contextos/HabitContext";

function BotaoDiaDaSemana(props) {
    const { id, sigla, disabled } = props;

    const { novoHabito, setNovoHabito } = useContext(HabitContext);

    console.log("Botao Dia da Semana " + id + ": ")
    console.log(novoHabito);

    const selecionado = novoHabito.dados.days.includes(id);

    function selecionarDia(){
        const dias = [...novoHabito.dados.days];
        let novosDias = [];
        
        if(selecionado){
            novosDias = dias.filter((dia) => dia !== id);
        }
        else {
            novosDias = [...dias, id];
        }

        novosDias.sort((a, b) => a - b);
        setNovoHabito({...novoHabito, dados:{...novoHabito.dados, days:novosDias}})
    }

    return (
        <Botao
            type="button"
            selecionado={selecionado}
            disabled={disabled}
            onClick={selecionarDia}
        >
            {sigla}
        </Botao>
    )
}

export default BotaoDiaDaSemana;

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


const Botao = styled.button`
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