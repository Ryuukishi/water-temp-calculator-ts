import React from "react";

interface Props {
  temperature: string | number;
}


const BoilingVerdict = ({ temperature }: Props) => {
  if (temperature === "") {
    return <p></p>
  } else if (temperature >= 100) {
    return <p>The water would boil.</p>
  } else {
    return <p>The water would not boil.</p>
  }
}

export default BoilingVerdict;
