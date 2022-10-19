import { StyledCalculator } from "./styles";
import Button from "../Button/Button";
import Display from "../Display/Display";

const Calculator = () => {
  return (
    <StyledCalculator>
      <Display value="100" />
      <Button variant="action" label="AC" />
      <Button variant="action" label="/" />
      <Button variant="standard" label="7" />
      <Button variant="standard" label="8" />
      <Button variant="standard" label="9" />
      <Button variant="standard" label="*" />
      <Button variant="standard" label="4" />
      <Button variant="standard" label="5" />
      <Button variant="standard" label="6" />
      <Button variant="standard" label="-" />
      <Button variant="standard" label="1" />
      <Button variant="standard" label="2" />
      <Button variant="standard" label="3" />
      <Button variant="action" label="." />
      <Button variant="standard" label="0" />
      <Button variant="action" label="=" />
      <Button variant="action" label="+" />
    </StyledCalculator>
  );
};

export default Calculator;
