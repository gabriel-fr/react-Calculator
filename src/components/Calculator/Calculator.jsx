import { StyledCalculator } from "./styles";
import Button from "../Button/Button";
import Display from "../Display/Display";
import { useState } from "react";

const Calculator = () => {
  const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };

  const [params, setParams] = useState(initialState);

  const clearMemory = () => {
    setParams(initialState);
  };

  const setOperation = (op) => {
    if (params.current === 0) {
      setParams({ ...params, operation: op, current: 1, clearDisplay: true });
      return;
    }

    const equals = op === "=";
    const currentOperation = params.operation;
    const values = params.values;

    try {
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]} `);
    } catch (e) {
      values[0] = params.values[0];
    }
    values[1] = 0;

    setParams({
      ...params,
      displayValue: values[0],
      operation: equals ? null : op,
      current: equals ? 0 : 1,
      clearDisplay: !equals,
      values,
    });
  };

  const addDigit = (digit) => {
    if (digit === "." && params.displayValue.includes(".")) return;

    const clearDisplay = params.displayValue === "0" || params.clearDisplay;
    const currentValue = clearDisplay ? "" : params.displayValue;
    const displayValue = currentValue + digit;

    setParams({ ...params, displayValue, clearDisplay: false });

    if (digit !== ".") {
      const currentPosition = params.current;
      const newValue = displayValue;
      const parseValue = parseFloat(newValue);
      const newValues = params.values;
      newValues[currentPosition] = parseValue;
    }
  };

  return (
    <StyledCalculator>
      <Display value={params.displayValue} />
      <Button variant="standard" type="huge" onClick={(e) => clearMemory()} label="AC" />
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
      <Button variant="action" onClick={(e) => setOperation(e.target.textContent)} label="+" />
      <Button
        variant="standard"
        type="large"
        onClick={(e) => addDigit(e.target.textContent)}
        label="0"
      />
      <Button variant="standard" onClick={(e) => addDigit(e.target.textContent)} label="." />
      <Button variant="action" onClick={(e) => setOperation(e.target.textContent)} label="=" />
    </StyledCalculator>
  );
};

export default Calculator;
