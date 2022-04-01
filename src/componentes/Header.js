import { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contextos/UserContext";

function Header() {
    const { usuario } = useContext(UserContext);
    
    console.log("Header:");
    console.log(usuario);
    
    const imagem = usuario.image;
    const nome = usuario.name;
    return (
        <TrackItHeader>
            <h1>TrackIt</h1>
            <img src={imagem} alt={nome} />
        </TrackItHeader>
    )
}

export default Header;

const TrackItHeader = styled.header`
    width: 100vw;
    height: 70px;

    background-color: var(--cor-bg-header);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: 'Playball', cursive;
        
        font-size: 39px;
        line-height: 49px;

        color: var(--cor-titulo-trackit);

        margin-left: 18px;

    }

    img {
        width: 51px;
        height: 51px;

        border-radius: 98.5px;

        margin-right: 18px;
    }
`;