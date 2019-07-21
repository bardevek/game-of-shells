import React from "react";

import { ShellItem } from "./StyledComponents";

const Shell = ({ onClick, offset, zIndex, shouldAnimate }) => {
  return (
    <ShellItem
      onClick={onClick}
      offset={offset}
      zIndex={zIndex}
      shouldAnimate={shouldAnimate}
    />
  );
};

export { Shell };
