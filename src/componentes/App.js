import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalStyle from "../assets/css/globalStyles";

import UserContext from "../contextos/UserContext";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHoje from "./TelaHoje";



function App() {
    
    const [usuario, setUsuario] = useState({});
    
    return (
        <>
            <Reset />
            <GlobalStyle />
            <UserContext.Provider value={{usuario, setUsuario}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TelaLogin />}></Route>
                        <Route path="/cadastro" element={<TelaCadastro />}></Route>
                        <Route path="/hoje" element={<TelaHoje />}></Route>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

export default App;