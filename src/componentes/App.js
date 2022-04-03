import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalStyle from "../assets/css/globalStyles";

import UserContext from "../contextos/UserContext";
import HabitContext from "../contextos/HabitContext";

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

    return (
        <>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider value={{ usuario, setUsuario }}>
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
            </UserContext.Provider>
        </>
    )
}

export default App;