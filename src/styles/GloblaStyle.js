import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style-type: none;
         
    }
button {
    cursor: pointer;
}

body{
    background-image: linear-gradient(45deg,#bfdee6,#defe99,#ecfdf1);
    min-height:100vh;
}

`;
