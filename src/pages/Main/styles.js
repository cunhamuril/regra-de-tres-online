import styled, { keyframes } from "styled-components";
import media from "styled-media-query";
import { tada } from "react-animations";

import { colors } from "../../theme";

const tadaAnimation = keyframes`${tada}`;

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

  width: 100%;
  height: 500px;
  padding: 30px 10px;
  max-width: 600px;
  border-radius: 4px;

  background-color: ${colors.primaryLight}DE;

  #title {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 60px;

    color: ${colors.primary};

    h4 {
      margin-left: 12px;
    }
  }

  #result {
    margin-top: 20px;
    font-weight: 500;
    color: ${colors.primaryDark};
    animation: 1s ${tadaAnimation};
  }

  ${media.lessThan("small")`
    height: 400px;
    
    #title {
      margin-bottom: 40px;
    }

    #result {
      margin-top: 40px;
    }
  `}
`;
