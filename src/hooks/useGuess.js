import { useCallback } from "react";

export const useGuess = (stage, setStage, setResultMessage) => {
  const correctMessage = "You're right !";
  const mistakeMessage = "Not this time. Try again!";

  const onGuess = useCallback(
    isWinning => {
      const handleGuess = () => {
        setStage(4);
        if (isWinning) {
          setResultMessage(correctMessage);
        } else {
          setResultMessage(mistakeMessage);
        }
      };
      return stage === 3 ? handleGuess() : undefined;
    },
    [stage, setStage, setResultMessage]
  );

  return { onGuess };
};
