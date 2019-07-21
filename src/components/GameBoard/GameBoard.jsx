import React from "react";
import { useMemo, Fragment } from "react";

import { Shell } from "../Shell";
import { useGuess } from "../../hooks";
import { Circle, Container, ShellsRow } from "./styledComponents";

const GameBoard = ({
                       currentOrder,
                       initialOrder,
                       stage,
                       setStage,
                       setResultMessage
                   }) => {
    const { onGuess } = useGuess(stage, setStage, setResultMessage);

    const shouldBallBeVisible = useMemo(() => stage === 1, [stage]);

    return (
        <Container>
            <ShellsRow>
                {initialOrder.map(shell => (
                    <Fragment key={shell.id}>
                        <Shell
                            offset={`${(currentOrder.indexOf(shell) * 450) /
                            (currentOrder.length - 1)}px`}
                            zIndex={shell.id + 1}
                            onClick={() => onGuess(shell.isWinning)}
                            shouldAnimate={stage === 1 && shell.isWinning}
                        />
                        {shell.isWinning && (
                            <Circle
                                offset={`${(currentOrder.indexOf(shell) * 450) /
                                (currentOrder.length - 1)}px`}
                                display={shouldBallBeVisible ? "block" : "none"}
                            />
                        )}
                    </Fragment>
                ))}
            </ShellsRow>
        </Container>
    );
};

export { GameBoard };
