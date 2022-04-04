import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

import UserContext from "../contextos/UserContext";
import BackgroundContext from "../contextos/BackgroundContext";
import ProgressContext from "../contextos/ProgressContext";

import Header from "./Header";
import Menu from "./Menu";
import HabitoDeHoje from "./HabitoDeHoje";


const LINK_API_HABITOS_HOJE = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

dayjs.locale('pt-br');

function TelaHoje() {
    const { setBackground } = useContext(BackgroundContext);
    const { usuario } = useContext(UserContext);
    const { progresso, setProgresso } = useContext(ProgressContext);


    const [habitos, setHabitos] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        setBackground("#E5E5E5");

        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }
        const promessa = axios.get(LINK_API_HABITOS_HOJE, config);

        promessa.then((response) => {
            const { data } = response;
            setHabitos(data);
        })

        promessa.catch((err) => {
            const { status, data } = err.response;
            alert(`Não foi recuperar a lista de hábitos do servidor.
            Erro ${status}: ${data} `);
        })

    }, [refreshKey]);


    useEffect(() => {
        console.log("Habitos");
        console.log(habitos);
        console.log("Calculando o progresso...")
        setProgresso(calcularProgresso());
    }, [habitos])

    function atualizarPagina() {
        setRefreshKey(refreshKey + 1);
    }

    function calcularProgresso() {
        const numeroTotalDeHabitos = habitos.length;
        let numeroDeHabitosCompletos = 0;

        habitos.forEach((habito) => {
            if (habito.done) {
                numeroDeHabitosCompletos++;
            }
        })

        let progressoAtual = progresso;

        if (numeroTotalDeHabitos !== 0) {
            progressoAtual = Math.round((numeroDeHabitosCompletos / numeroTotalDeHabitos) * 100);
        }

        return progressoAtual;
    }

    function obterData() {
        const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
        const datajs = dayjs();
        const data = {
            diaDaSemana: diasDaSemana[datajs.day()],
            dia: datajs.format("DD/MM")
        }

        return `${data.diaDaSemana}, ${data.dia}`;

    }

    const dataTexto = obterData();

    const textoProgresso = {
        conteudo: progresso === 0 ?
            "Nenhum hábito concluído ainda" :
            `${progresso}% dos hábitos concluídos`,
        
        cor: progresso === 0 ?
        "#BABABA" :
        "#8FC549"
    }

    const habitosDehoje = habitos.map((habito) => 
        <HabitoDeHoje 
            key={habito.id}
            id={habito.id}
            habito={habito.name}
            feito={habito.done}
            sequenciaAtual={habito.currentSequence}
            maiorSequencia={habito.highestSequence}
            atualizarPagina={atualizarPagina}
        />
    )

    console.log(textoProgresso)     

    return (
        <>
            <Header />
            <Conteudo>
                <Container>
                    <Info>
                        <Data>{dataTexto}</Data>
                        <Progresso cor={textoProgresso.cor}>{textoProgresso.conteudo}</Progresso>
                    </Info>
                    {habitosDehoje}
                </Container>
            </Conteudo>
            <Menu />
        </>
    );
}

export default TelaHoje;

const Conteudo = styled.main`
    margin-top: 70px;
    margin-bottom: 120px;

`;

const Container = styled.div`
    width: 340px;
    margin: 0 auto;
`;

const Info = styled.section`
    padding-top: 28px;
    margin-bottom: 28px;
`;

const Data = styled.h2`
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: var(--cor-titulo-pagina);
`;

const Progresso = styled.h3`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: ${(props) => props.cor}
`;