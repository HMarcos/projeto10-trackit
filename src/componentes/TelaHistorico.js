import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

function TelaHistorico(props) {
    
    props.definirBackground();

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