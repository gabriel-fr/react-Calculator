import styled from "styled-components";
import { colors } from "../../utils/theme/theme";

export const StyledDisplay = styled.div`
  grid-column: span 4;
  background-color: ${colors.DisplayBackground};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  overflow: hidden;
`;
