import React from "react";

import { Container } from "./styles";

const Form = ({ onSubmit, onReset, valueX }) => (
  <Container onSubmit={onSubmit} onReset={onReset}>
    <div className="form-group">
      <label htmlFor="valueA">O valor de </label>
      <input required type="number" step="any" placeholder="A" name="valueA" />
      <label htmlFor="valueB"> Está para </label>
      <input required type="number" step="any" placeholder="B" name="valueB" />
    </div>

    <p>Assim como</p>

    <div className="form-group">
      <label htmlFor="valueY">O valor de </label>
      <input required type="number" step="any" placeholder="Y" name="valueY" />
      <label htmlFor="valueX"> Está para </label>
      <input
        type="number"
        placeholder="X"
        name="valueX"
        disabled
        value={valueX}
      />
    </div>

    <div className="button-group">
      <button type="submit">Calcular</button>
      <button type="reset">Limpar</button>
    </div>
  </Container>
);

export default Form;
