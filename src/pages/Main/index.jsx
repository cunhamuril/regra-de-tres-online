import React, { useState } from "react";
import { CalculatorFilled } from "@ant-design/icons";

import Form from "../components/Form";

import { Container, Card } from "./styles";

const Main = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const A = +e.target.valueA.value;
    const B = +e.target.valueB.value;
    const Y = +e.target.valueY.value;

    setResult("X = " + (B * Y) / A);
  };

  const handleReset = (e) => {
    e.preventDefault();

    e.target.valueA.value = "";
    e.target.valueB.value = "";
    e.target.valueY.value = "";
    setResult(null);
  };

  return (
    <Container>
      <Card>
        <span id="title">
          <CalculatorFilled />
          <h4>Regra de Três</h4>
        </span>

        <Form onSubmit={handleSubmit} onReset={handleReset} />

        <h2 id="result">{result}</h2>
      </Card>
    </Container>
  );
};

export default Main;
