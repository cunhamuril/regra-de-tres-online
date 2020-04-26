import React from "react";
import { CalculatorFilled } from "@ant-design/icons";

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

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="value-a">O valor de </label>
            <input type="number" placeholder="A" name="value-a" />
            <label htmlFor="value-a"> Está para </label>
            <input type="number" placeholder="B" name="value-b" />
          </div>

          <p>Assim como</p>

          <div className="form-group">
            <label htmlFor="value-y">O valor de </label>
            <input type="number" placeholder="Y" name="value-a" />
            <label htmlFor="value-a"> Está para </label>
            <input
              type="number"
              placeholder="X"
              name="value-x"
              disabled="true"
            />
          </div>

          <div className="button-group">
            <button type="submit">Calcular</button>
            <button type="reset">Limpar</button>
          </div>
        </form>

        <h2 id="result">250</h2>
      </Card>
    </Container>
  );
};

export default Main;
