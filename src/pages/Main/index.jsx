import React from "react";
import { CalculatorFilled } from "@ant-design/icons";

import Form from "../components/Form";

import { Container, Card } from "./styles";

const Main = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Card>
        <span id="title">
          <CalculatorFilled />
          <h4>Regra de Três</h4>
        </span>

        <Form onSubmit={handleSubmit} />

        <h2 id="result">250</h2>
      </Card>
    </Container>
  );
};

export default Main;
