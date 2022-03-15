import styled, { createGlobalStyle } from 'styled-components';

export const StyleGlobal = createGlobalStyle`

    html {
        height: 100%;
    }

    body{
        background-color: aqua;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: "Poppins",'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        
    }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* > p {
    color: white;
  } */

  .score {
    font-weight: 600;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    filter: drop-shadow(2px 2px blue);
    font-size: 3rem;
    text-align: center;
    margin: 20px;
    font-weight: 600;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, white, aqua);
    border: 2px solid aqua;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
