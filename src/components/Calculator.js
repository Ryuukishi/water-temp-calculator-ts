import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const Calculator = () => {
  const [celsius, setCelsius] = useState("");

  const [fahrenheit, setFahrenheit] = useState("");

  const convertTemp = (temperature, scale) => {
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

  const handleCelsiusChange = (event) => {
    console.log(event.target.value);
    if (!event.target.value || !event.target.value.trim()) {
      setFahrenheit("");
      setCelsius("");
    } else if (!isNaN(event.target.value)) {
      setCelsius(event.target.value);
      setFahrenheit(convertTemp(event.target.value, "fahrenheit"));
    }
  };

  const handleFahrenheitChange = (event) => {
    if (!event.target.value || !event.target.value.trim()) {
      setFahrenheit("");
      setCelsius("");
    } else if (!isNaN(event.target.value)) {
      setFahrenheit(event.target.value);
      setCelsius(convertTemp(event.target.value, "celsius"));
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
