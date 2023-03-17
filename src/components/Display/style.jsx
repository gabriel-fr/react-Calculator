import styled from "styled-components";
import { colors } from "../../utils/theme/theme";

export const StyledDisplay = styled.div`
  display: block;
  position: relative;
  grid-column: span 4;
  background-color: ${colors.DisplayBackground};

  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  overflow: hidden;
`;

export const HistoryDisplay = styled.div`
  font-size: 14px;
  right: 0px;
  position: absolute;
  color: #818181;
  margin-right: 7px;
`;

export const NumbersDisplay = styled.div`
  margin-top: 20px;
`;
