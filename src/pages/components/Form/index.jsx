import React from "react";

import { Container } from "./styles";

const Form = ({ onSubmit }) => (
  <Container onSubmit={onSubmit}>
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
      <input type="number" placeholder="X" name="value-x" disabled="true" />
    </div>

    <div className="button-group">
      <button type="submit">Calcular</button>
      <button type="reset">Limpar</button>
    </div>
  </Container>
);

export default Form;
