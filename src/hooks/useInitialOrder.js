import {useMemo} from "react"

export const useInitialOrder = (length) => {
    const winningIndex = useMemo(
        () => Math.floor(Math.random() * length), [length]
    );

    const initialEmptyArray = useMemo(
        () => Array.from(Array(Number(length))), [length]
    );

    return useMemo(
        () => initialEmptyArray.map(
            (item,index) => ({
                id: index,
                isWinning: winningIndex === index
            })
        ) , [winningIndex,initialEmptyArray]
    )
};