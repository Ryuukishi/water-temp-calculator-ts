const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
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
