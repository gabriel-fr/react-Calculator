import { StyledCalculator } from "./styles";
import Button from "../Button/Button";
import Display from "../Display/Display";

const Calculator = () => {
  const clearMemory = () => {
    console.log("limpar");
  };

  const setOperation = (op) => {
    console.log(op);
  };

  const addDigit = (digit) => {
    console.log(digit);
  };

  return (
    <StyledCalculator>
      <Display value="100" />
      <Button variant="action" onClick={(e) => clearMemory()} label="AC" />
      <Button variant="action" onClick={(e) => setOperation(e.target.textContent)} label="/" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="7" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="8" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="9" />
      <Button variant="action" onClick={(e) => setOperation(e.target.textContent)} label="*" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="4" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="5" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="6" />
      <Button variant="action" onClick={(e) => setOperation(e.target.textContent)} label="-" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="1" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="2" />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="3" />
      <Button variant="action" onClick={(e) => addDigit(e.target.textContent)} label="." />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="0" />
      <Button variant="action" onClick={(e) => setOperation(e.target.textContent)} label="=" />
      <Button variant="action" onClick={(e) => setOperation(e.target.textContent)} label="+" />
    </StyledCalculator>
  );
};

export default Calculator;
