import { StyledCalculator } from "./styles";
import Button from "../Button/Button";
import Display from "../Display/Display";
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [history, setHistory] = useState([]);
  const [final, setFinal] = useState(false);

  const handleInput = value => {
    if (final) {
      setInput("");
      setFinal(false);
    }
    setInput(prevInput => (prevInput === "0" ? value : prevInput + value));
  };

  const handleClear = () => {
    setInput("0");
    setHistory([]);
  };

  const handleEquals = () => {
    const result = eval(input).toString();
    setInput(result);
    setHistory(() => [`${input}=${result}`]);
    setFinal(true);
  };

  const handleHistoryClick = expression => {
    setInput(expression.split("=")[0]);
  };

  return (
    <StyledCalculator>
      <Display
        value={input}
        history={history.map((expression, index) => (
          <div key={index} onClick={() => handleHistoryClick(expression)}>
            {expression}
          </div>
        ))}
      />
      <Button variant="standard" type="huge" onClick={handleClear} label="CE" />
      <Button variant="action" onClick={() => handleInput("/")} label="/" />
      <Button variant="standard" onClick={() => handleInput("7")} label="7" />
      <Button variant="standard" onClick={() => handleInput("8")} label="8" />
      <Button variant="standard" onClick={() => handleInput("9")} label="9" />
      <Button variant="action" onClick={() => handleInput("*")} label="*" />
      <Button variant="standard" onClick={() => handleInput("4")} label="4" />
      <Button variant="standard" onClick={() => handleInput("5")} label="5" />
      <Button variant="standard" onClick={() => handleInput("6")} label="6" />
      <Button variant="action" onClick={() => handleInput("-")} label="-" />
      <Button variant="standard" onClick={() => handleInput("1")} label="1" />
      <Button variant="standard" onClick={() => handleInput("2")} label="2" />
      <Button variant="standard" onClick={() => handleInput("3")} label="3" />
      <Button variant="action" onClick={() => handleInput("+")} label="+" />
      <Button variant="standard" type="large" onClick={() => handleInput("0")} label="0" />
      <Button variant="standard" onClick={() => handleInput(".")} label="." />
      <Button variant="action" onClick={handleEquals} label="=" />
    </StyledCalculator>
  );
};

export default Calculator;
