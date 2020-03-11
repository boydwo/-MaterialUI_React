import React from "react";
import Header from "./Header";
import Locale from './LocaleButton'
import { Container } from "@material-ui/core";
import './app.style.css'

function App() {
  return (
    <>
      <Header />
      <Container className="teste">
        <Locale />
      </Container>

    </>
  );
}

export default App;
