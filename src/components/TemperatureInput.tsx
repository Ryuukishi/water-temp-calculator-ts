import React from "react";

interface Props {
  scale: "c" | "f";
  temperature?: string;
  onTemperatureChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TemperatureInput = ({ scale, temperature, onTemperatureChange }: Props) => {

  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={onTemperatureChange} />
    </fieldset>
  );
};
export default TemperatureInput;
