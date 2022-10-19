import styled from "styled-components";
import { colors } from "../../utils/theme/theme";

export const StyledButton = styled.button`
  font-size: 1.4rem;
  background-color: ${colors.ButtonBackground};
  border: none;
  border-right: 1px solid ${colors.BorderButton};
  border-bottom: 1px solid ${colors.BorderButton};
  outline: none;
`;
