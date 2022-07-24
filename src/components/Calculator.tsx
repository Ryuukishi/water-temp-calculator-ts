import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const Calculator = () => {
  const [celsius, setCelsius] = useState("");

  const [fahrenheit, setFahrenheit] = useState("");

  const convertTemp = (temperature: number, scale: "celsius" | "fahrenheit"): string => {
    let newTemp = "";
    switch (scale) {
      case "celsius":
        newTemp = (((temperature - 32) * 5) / 9)
          .toFixed(2)
          .replace(/[.,](00)|0$/, "");
        break;
      case "fahrenheit":
        newTemp = ((temperature / 5) * 9 + 32)
          .toFixed(2)
          .replace(/[.,](00)|0$/, "");
        break;
      default:
        break;
    }
    return newTemp;
  };

  const handleCelsiusChange = (event: {target: {value: string}}): void => {
    const temp: number = +event.target.value
    if (!temp) {
      setFahrenheit("");
      setCelsius("");
    } else {
      setCelsius(event.target.value);
      setFahrenheit(convertTemp(+temp, "fahrenheit"));
    }
  };

  const handleFahrenheitChange = (event: {target: {value: string}}): void => {
    const temp: number = +event.target.value
    if (!temp) {
      setFahrenheit("");
      setCelsius("");
    } else if (!isNaN(temp)) {
      setFahrenheit(event.target.value);
      setCelsius(convertTemp(temp, "celsius"));
    }
  };

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict temperature={celsius} />
    </div>
  );
};

export default Calculator;
