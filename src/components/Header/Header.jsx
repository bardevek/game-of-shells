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
import { instruction, question } from "./messages";

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
      {stage === 0 && <Instruction>{instruction}</Instruction>}
      {shouldShowButtonAndInput && (
        <SelectAndInputContainer>
          <DifficultySelect
            setNumberOfShells={setNumberOfShells}
            numberOfShells={numberOfShells}
          />
          <StartButton onClick={onStart} stage={stage} />
        </SelectAndInputContainer>
      )}
      {stage === 3 && <h2>{question}</h2>}
      {stage === 4 && <h2>{resultMessage}</h2>}
    </HeaderContainer>
  );
};

export { Header };
