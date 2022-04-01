import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalStyle from "../assets/css/globalStyles";


import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />}></Route>
                    <Route path="/cadastro" element={<TelaCadastro />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;