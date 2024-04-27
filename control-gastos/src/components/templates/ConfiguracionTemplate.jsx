import styled from "styled-components";
import {Header} from "../../index"
import {useState} from "react"

export function ConfiguracionTemplate() {
  const [state, setState] = useState(false);

  return (

  <Container>
<header className="header"> 
<Header stateConfig={{ state: state, setState: () => setState(!state) }} />
</ header>
<section className="area1"></section>
<section className="area2"></section>
<section className="main"></section>
  </Container>);
}

const Container =styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 50px    
    "main" auto;

    .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14); 
    display: flex;
    align-items: center;
  }

  .area1{
    grid-area: area1;
    background-color: violet;
    display:flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14); 
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
   
    h1 {
      font-size: 3rem;
    }
}

.main {
    grid-area: main;
    background-color: pink;
}
`