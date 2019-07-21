import React from "react";

import {Button} from "./StyledComponents";

const StartButton = ({ onClick, stage }) => {
  const message = stage === 4 ? "TRY AGAIN" : "START";

  return <Button onClick={onClick}>{message}</Button>;
};

export { StartButton };
