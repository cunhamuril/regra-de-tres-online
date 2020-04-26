import styled from "styled-components";
import media from "styled-media-query";

import { colors } from "../../../theme";

export const Container = styled.form`
  color: ${colors.primaryDark};

  .form-group {
    margin-bottom: 10px;

    input {
      font-size: 2rem;
      margin: 0 4px;

      border: 0;
      max-width: 70px;
      padding: 5px 0;
      border-radius: 4px;

      text-align: center;

      color: ${colors.primaryDark};

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      ${media.lessThan("small")`    
        font-size: 1.2rem;
        max-width: 40px;
      `}
    }
  }

  p {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: ${colors.primary};

    ${media.lessThan("small")`    
      font-size: 0.9rem;
    `};
  }

  .button-group {
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-evenly;

    button {
      border: 0;
      padding: 10px 20px;
      border-radius: 4px;

      font-size: 2rem;
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

      ${media.lessThan("small")`    
        font-size: 1.2rem;
      `}
    }
  }
`;
