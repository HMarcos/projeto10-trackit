import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ProgressContext from "../contextos/ProgressContext";

function Menu() {

    const {progresso} = useContext(ProgressContext);

    const circularProgressbar = <CircularProgressbar
        value={progresso}
        text={"Hoje"}
        background={true}
        backgroundPadding={6}
    />;

    return (
        <Footer>
            <nav>
                <ul>
                    <Link to="/habitos"><li>Hábitos</li></Link>
                    <Link to="/hoje"><OpcaoHoje>{circularProgressbar}</OpcaoHoje></Link>
                    <Link to="/historico"><li>Histórico</li></Link>
                </ul>
            </nav>
        </Footer>
    );
}

export default Menu;

const Footer = styled.footer`
    width: 100vw;   
    height: 70px;

    background-color: var( --cor-bg-menu);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    
    nav {
        width: 100%;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    li {
        font-size: 18px;
        line-height: 22px;

        color: var(--cor-opcoes-menu);
    }
    
`;

const OpcaoHoje = styled.li`
    width: 91px;
    height: 91px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 35px;

    .CircularProgressbar-path {
        stroke: var(--cor-bg-menu);
    }

    .CircularProgressbar-trail {
         stroke: var(--cor-opcoes-menu);
    }   

    .CircularProgressbar-text {
        fill: var(--cor-bg-menu);
    }
    .CircularProgressbar-background {
        fill: var(--cor-opcoes-menu);
    }

`;