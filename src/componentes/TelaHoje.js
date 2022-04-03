import { useContext, useEffect } from "react";
import styled from "styled-components";

import BackgroundContext from "../contextos/BackgroundContext";

import Header from "./Header";
import Menu from "./Menu";


function TelaHoje() {
    const {setBackground} = useContext(BackgroundContext);
    useEffect(() => {
        setBackground("#E5E5E5");
      }, []);

    return (
        <>
            <Header />
            <Conteudo>
                <h1>Hoje!</h1>
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