import styled from "styled-components";

import { colors } from "../../theme";

export const Container = styled.div`
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;

export const Card = styled.div`
  z-index: 9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 300px;
  max-width: 400px;
  border-radius: 4px;

  background-color: ${colors.primaryLight}DE;

  #title {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.primary};

    h4 {
      margin-left: 4px;
    }
  }

  #result {
    font-weight: 500;
    color: ${colors.primaryDark};
  }
`;
