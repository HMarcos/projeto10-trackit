
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        text-decoration: none;
    }
    
    body {
        font-family: 'Lexend Deca', sans-serif;
        background-color: ${(props) => props.background};
        
        --cor-bg-telas-login-e-cadastro: #FFFFFF;
        --cor-bg-telas-iteracao: #E5E5E5;

        --cor-bg-header: #126BA5;
        --cor-titulo-trackit: #FFFFFF;
        --cor-titulo-pagina: #126BA5;

        --cor-bg-menu: #FFFFFF;
        --cor-opcoes-menu: #52B6FF;
        
        --cor-bg-form-novo-habito: #FFFFFF;
        --cor-bg-habito: #FFFFFF;
        --cor-habito: #666666;

        --cor-bg-input: #FFFFFF;
        --cor-bg-input-disabled: #F2F2F2;
        --cor-input: #666666;
        --cor-input-placeholder: #DBDBDB;
        --borda-input: 1px solid #D5D5D5;
        --borda-input-radius: 5px;
        --cor-bg-botoes: #52B6FF;
        --cor-botoes: #FFFFFF;
        --border-radius-botoes: 4.7px;

        --cor-link: #52B6FF;
        
        /*font-family: 'Playball', cursive;*/
        
    }

    button{
        border: none;
        cursor: pointer;
    }

    a {
        cursor: pointer;
    }
`;

export default GlobalStyle;