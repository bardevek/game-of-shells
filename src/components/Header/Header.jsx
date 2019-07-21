import React from "react";
import { useMemo } from "react";

import { StartButton } from "./StartButton";
import { DifficultySelect } from "./DifficultySelect";
import {
  HeaderContainer,
  Instruction,
  SelectAndInputContainer,
  Title
} from "./StyledComponents";

const Header = ({
  stage,
  numberOfShells,
  setNumberOfShells,
  onStart,
  resultMessage
}) => {
  const shouldShowButtonAndInput = useMemo(() => stage === 0 || stage === 4, [
    stage
  ]);

  return (
    <HeaderContainer>
      <Title>Game of shells</Title>
      {stage === 0 && (
        <Instruction>
          Under one of the containers, I hid the little red ball. When you press
          the start button I will show you where the ball is. Then all of the
          containers will be shuffled. Your goal is to guess where the ball is
          hidden.
        </Instruction>
      )}
      {shouldShowButtonAndInput && (
        <SelectAndInputContainer>
          <DifficultySelect
            setNumberOfShells={setNumberOfShells}
            numberOfShells={numberOfShells}
          />
          <StartButton onClick={onStart} stage={stage} />
        </SelectAndInputContainer>
      )}
      {stage === 3 && <h2>What's your guess ?</h2>}
      {stage === 4 && <h2>{resultMessage}</h2>}
    </HeaderContainer>
  );
};

export { Header };
