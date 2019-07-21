import React from "react";

import { LabelMessage, StyledSelect } from "./StyledComponents";

const DifficultySelect = ({ numberOfShells, setNumberOfShells }) => {
  return (
    <div>
      <label>
        <LabelMessage>Difficulty level:</LabelMessage>
        <StyledSelect
          value={numberOfShells}
          onChange={e => setNumberOfShells(e.target.value)}
        >
          <option value={3}>Beginner</option>
          <option value={4}>Medium</option>
          <option value={5}>Expert</option>
        </StyledSelect>
      </label>
    </div>
  );
};

export { DifficultySelect };
