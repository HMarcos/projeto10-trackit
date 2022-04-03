import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

function TelaHoje(props) {

    props.definirBackground();

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