import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Lexend Deca', sans-serif;
        --cor-bg-telas-login-e-cadastro: #FFFFFF;
        --cor-bg-telas-iteracao: #E5E5E5;

        --cor-bg-header: #126BA5;
        --cor-titulo-trackit: #FFFFFF;
        
        --cor-bg-input: #FFFFFF;
        --cor-bg-input-disabled: #F2F2F2;
        --cor-input: #AFAFAF;
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
`;

export default GlobalStyle;