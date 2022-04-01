import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

function TelaHabitos() {

    return (
        <>
            <Header />
            <Conteudo>
                <h1>Hábito!</h1>
            </Conteudo>
            <Menu />
        </>
    );
}

export default TelaHabitos;

const Conteudo = styled.main`
    height: calc(100vh - 70px - 70px);
    margin-top: 70px;
    margin-bottom: 70px;

    background-color: var(--cor-bg-telas-iteracao);
`;