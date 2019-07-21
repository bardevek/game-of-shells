import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { GameBoard,Header } from "./components";
import { useOrder,useInitialOrder } from "./hooks";

function App() {
  const [stage, setStage] = useState(0);
  const [resultMessage, setResultMessage] = useState(null);
  const [numberOfShells, setNumberOfShells] = useState(3);

  const initialOrder = useInitialOrder(numberOfShells);
  const { order, onStart } = useOrder(initialOrder, setStage);

  return (
      <View>
        <Header
            numberOfShells={numberOfShells}
            onStart={onStart}
            resultMessage={resultMessage}
            setNumberOfShells={setNumberOfShells}
            stage={stage}
        />
        <GameBoard
            currentOrder={order}
            initialOrder={initialOrder}
            stage={stage}
            setStage={setStage}
            setResultMessage={setResultMessage}
        />
      </View>
  );
}

const View = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
