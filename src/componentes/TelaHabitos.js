import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import HabitContext from "../contextos/HabitContext";
import UserContext from "../contextos/UserContext";

import Header from "./Header";
import Menu from "./Menu";
import NovoHabito from "./NovoHabito";
import Habito from "./Habito";

const LINK_API_HABITOS = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";


function TelaHabitos() {

    const { novoHabito, setNovoHabito } = useContext(HabitContext);
    const { usuario } = useContext(UserContext);

    const [habitos, setHabitos] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${usuario.token}`
            }
        }

        const promessa = axios.get(LINK_API_HABITOS, config);

        promessa.then((response) => {
            const { data } = response;
            setHabitos(data);

            console.log("Hábitos recuperados com suceeso");

        })

        promessa.catch((err) => {
            const { status, data } = err.response;
            alert(`Não foi recuperar a lista de hábitos do servidor.
            Erro ${status}: ${data} `);
        })
    },
        [refreshKey])

    function atualizarPagina(){
        setRefreshKey(refreshKey + 1);
    }

    function exibirNovoHabito() {
        setNovoHabito({ ...novoHabito, visivel: true });
    }

    function atribuitConteudoHabitos() {
        if (habitos === null) {
            return (<></>);
        }
        else if (habitos.length === 0) {
            return (<NenhumHabito>Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!</NenhumHabito>);
        }
        else {
            return (habitos.map((habito) =>
                <Habito
                    key={habito.id}
                    id={habito.id}
                    habito={habito.name}
                    dias={habito.days}
                />
            ));
        }
    }


    console.log(habitos);

    const conteudoHabitos = atribuitConteudoHabitos();

    const formNovoHabito = novoHabito.visivel ? <NovoHabito /> : <></>


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
                    <Habitos>
                        {conteudoHabitos}
                    </Habitos>
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
    margin-bottom: 20px;

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

const Habitos = styled.section`
    margin-top: 30px;
`;

const NenhumHabito = styled.p`
    width: 340px;
    
    margin-top: 30px;
    
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: var(--cor-habito);
`;