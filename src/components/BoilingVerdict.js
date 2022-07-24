const BoilingVerdict = ({ temperature }) => {
  return temperature >= 100 ? (
    <p>The water would boil.</p>
  ) : temperature !== "" ? (
    <p>The water would not boil.</p>
  ) : (
    ""
  );
};

export default BoilingVerdict;
