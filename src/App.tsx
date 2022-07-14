import React from 'react';
import RoundedImage from "./components/RoundedImage";
import Title from "./components/Title";
import styled from "styled-components";
import SocialNetworks from "./components/SocialNetworks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

function App() {
    return (
        <Container>
            <RoundedImage src={process.env.PUBLIC_URL + "/photo/victor.jpeg"}/>
            <Title/>
            <SocialNetworks/>
        </Container>
    );
}

export default App;
