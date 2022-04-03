import { useContext } from "react";
import styled from "styled-components";

import HabitContext from "../contextos/HabitContext";

import Header from "./Header";
import Menu from "./Menu";
import NovoHabito from "./NovoHabito";




function TelaHabitos() {

    const {novoHabito, setNovoHabito} = useContext(HabitContext);

    const formNovoHabito = novoHabito.visivel? <NovoHabito /> : <></>

    function exibirNovoHabito(){
        setNovoHabito({...novoHabito, visivel: true});
    }

    return (
        <>
            <Header />
            <Conteudo>
                <Container>
                    <MeusHabitos>
                        <h2>Meus hábitos</h2>
                        <button onClick={exibirNovoHabito}>+</button>
                    </MeusHabitos>
                    {formNovoHabito}
                </Container>
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

const Container = styled.div`
    width: 340px;
    margin: 0 auto;

    
`;

const MeusHabitos = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding-top: 22px;

    h2{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;

        color: var(--cor-titulo-pagina);
    }
    
    button{
        width: 40px;
        height: 35px;

        background-color: var(--cor-bg-botoes);
        border-radius: 4.63636px;

        font-size: 27px;
        line-height: 34px;

        text-align: center;

        color: var(--cor-botoes);
    }
`;