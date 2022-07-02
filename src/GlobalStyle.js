import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }
    p{
        margin: 0;
    }
    textarea:focus, input:focus{
    outline: none;
    
}
`;
