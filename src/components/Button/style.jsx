import styled, { css } from "styled-components";
import { colors } from "../../utils/theme/theme";

export const StyledButton = styled.button`
  font-size: 1.4rem;
  border: none;
  border-right: 1px solid ${colors.BorderButton};
  border-bottom: 1px solid ${colors.BorderButton};
  outline: none;

  ${(props) => {
    if (props.variant === "standard") {
      return css`
        background-color: ${colors.ButtonBackground["standard"]};

        &:active {
          background-color: ${colors.ButtonBackground["standardActive"]};
        }
      `;
    }

    if (props.variant === "action") {
      return css`
        background-color: ${colors.ButtonBackground["action"]};

        &:active {
          background-color: ${colors.ButtonBackground["actionActive"]};
        }
      `;
    }
  }}
`;

export const StyledLargeButton = styled.button`
  grid-column: span 2;
`;

export const StyledHugeButton = styled.button`
  grid-column: span 3;
`;
