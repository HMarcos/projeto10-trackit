import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalStyle from "../assets/css/globalStyles";

import UserContext from "../contextos/UserContext";
import HabitContext from "../contextos/HabitContext";
import BackgroundContext from "../contextos/BackgroundContext";
import ProgressContext from "../contextos/ProgressContext";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHoje from "./TelaHoje";
import TelaHabitos from "./TelaHabitos";
import TelaHistorico from "./TelaHistorico";


function App() {

    const [usuario, setUsuario] = useState({});
    const [novoHabito, setNovoHabito] = useState({
        visivel: false,
        dados: {
            name: "",
            days: []
        }
    });

    const [progresso, setProgresso] = useState(0);

    const [background, setBackground] = useState("#FFFFFF");

    return (
        <>
            <Reset />
            <GlobalStyle background={background} />
            <BackgroundContext.Provider value={{ background, setBackground }}>
                <UserContext.Provider value={{ usuario, setUsuario }}>
                    <ProgressContext.Provider
                        value={{ progresso, setProgresso }}>
                        <HabitContext.Provider value={{ novoHabito, setNovoHabito }}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<TelaLogin />}></Route>
                                    <Route path="/cadastro" element={<TelaCadastro />}></Route>
                                    <Route path="/hoje" element={<TelaHoje />}></Route>
                                    <Route path="/habitos" element={<TelaHabitos />}></Route>
                                    <Route path="/historico" element={<TelaHistorico />}></Route>
                                </Routes>
                            </BrowserRouter>
                        </HabitContext.Provider>
                    </ProgressContext.Provider>
                </UserContext.Provider>
            </BackgroundContext.Provider>
        </>
    )
}

export default App;