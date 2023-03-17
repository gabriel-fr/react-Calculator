import { HistoryDisplay, NumbersDisplay, StyledDisplay } from "./style";

const Display = props => {
  return (
    <StyledDisplay>
      <HistoryDisplay>{props?.history}</HistoryDisplay>
      <NumbersDisplay>{props.value}</NumbersDisplay>
    </StyledDisplay>
  );
};

export default Display;
