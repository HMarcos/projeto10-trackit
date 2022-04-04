import { useContext, useEffect } from "react";
import styled from "styled-components";

import BackgroundContext from "../contextos/BackgroundContext";

import Header from "./Header";
import Menu from "./Menu";

function TelaHistorico() {

    const { setBackground } = useContext(BackgroundContext);

    useEffect(() => {
        setBackground("#E5E5E5");
    }, [])

    return (
        <>
            <Header />
            <Conteudo>
                <Container>
                    <Titulo>Histórico</Titulo>
                    <Aviso>
                        Em breve você poderá ver o histórico dos seus hábitos aqui!
                    </Aviso>
                </Container>
            </Conteudo>
            <Menu />
        </>
    );
}

export default TelaHistorico;

const Conteudo = styled.main`
    margin-top: 70px;
    margin-bottom: 120px;
`;

const Container = styled.div`
    width: 340px;
    margin: 0 auto;

    
`;

const Titulo = styled.h2`
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    padding-top: 28px;

    color: var(--cor-titulo-pagina);
`;

const Aviso = styled.p`
    width: 100%;
    
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    margin-top: 17px;
    color: var(--cor-habito);
`;