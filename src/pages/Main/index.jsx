import React, { useState } from "react";
import { CalculatorOutlined } from "@ant-design/icons";

import Form from "../components/Form";

import { Container, Card } from "./styles";

const Main = () => {
  const [result, setResult] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();

    const A = +e.target.valueA.value;
    const B = +e.target.valueB.value;
    const Y = +e.target.valueY.value;

    setResult((B * Y) / A);
  };

  const handleReset = (e) => {
    e.preventDefault();

    e.target.valueA.value = "";
    e.target.valueB.value = "";
    e.target.valueY.value = "";
    e.target.valueX.value = "";
    setResult(undefined);
  };

  return (
    <Container>
      <Card>
        <span id="title">
          <CalculatorOutlined style={{ fontSize: "3rem" }} />
          <h4>Regra de Três Online</h4>
        </span>

        <Form onSubmit={handleSubmit} onReset={handleReset} valueX={result} />

        {result && (
          <h2 id="result">
            X = <strong>{result}</strong>
          </h2>
        )}
      </Card>
    </Container>
  );
};

export default Main;
