import styled from "styled-components";

import { colors } from "../../../theme";

export const Container = styled.form`
  color: ${colors.primaryDark};

  .form-group {
    margin-bottom: 10px;

    input {
      margin: 0 4px;

      border: 0;
      max-width: 40px;
      padding: 5px 0;
      border-radius: 4px;

      text-align: center;

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  p {
    margin-bottom: 10px;
  }

  .button-group {
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-evenly;

    button {
      border: 0;
      padding: 10px 20px;
      border-radius: 4px;

      font-size: 14px;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.2s;
      background-color: ${colors.primary};

      &:hover {
        background-color: ${colors.primaryDark};
      }

      &:active {
        background-color: ${colors.background};
      }
    }
  }
`;
