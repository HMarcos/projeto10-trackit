import { useContext, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

import BackgroundContext from "../contextos/BackgroundContext";

import Header from "./Header";
import Menu from "./Menu";

dayjs.locale('pt-br');

function TelaHoje() {
    const { setBackground } = useContext(BackgroundContext);
    useEffect(() => {
        setBackground("#E5E5E5");
    }, []);


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

    return (
        <>
            <Header />
            <Conteudo>
                <Container>
                    <Info>
                        <Data>{dataTexto}</Data>
                    </Info>
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
    margin-top: 28px;
    margin-bottom: 28px;
`;

const Data = styled.h2`
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: var(--cor-titulo-pagina);
`;