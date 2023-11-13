import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.secondaries.white};
  }
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
 
  * {
 
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    section{
      padding-left: 36px;
      padding-right: 36px;
      margin-bottom: 12px;
    }
   
    @media(max-width: 700px ){
        body{
            width: fit-content;
        }
    }

  }
`;



export default GlobalStyles;
