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
                <h1>Histórico!</h1>
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