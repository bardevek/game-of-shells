import { useState, useCallback, useMemo, useEffect } from "react";
import useInterval from "react-useinterval";

import { getRandomElement, swapElements } from "../handlers";

export const useOrder = (initialOrder, setStage) => {
  const [order, setOrder] = useState(initialOrder);
  const [interval, setInterval] = useState(null);

  useEffect(() => setOrder(initialOrder), [initialOrder]);

  const duration = useMemo(() => order.length * 3000, [order]);

  const firstElement = getRandomElement(initialOrder);
  const secondElement = getRandomElement(
    initialOrder.filter(element => element.id !== firstElement.id)
  );

  const swapShells = useCallback(() => {
    setOrder(swapElements(order, firstElement, secondElement));
  }, [order, firstElement, secondElement]);

  useInterval(swapShells, interval);

  const onStart = useCallback(() => {
    setStage(1);
    setTimeout(() => {
      setStage(2);
      setInterval(500);
      setTimeout(() => {
        setInterval(null);
        setStage(3);
      }, duration);
    }, 2500);
  }, [setStage, duration]);

  return useMemo(() => ({ order, onStart }), [order, onStart]);
};
