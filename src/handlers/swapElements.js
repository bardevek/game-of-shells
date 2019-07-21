export const swapElements = (elements, firstElement, secondElement) => {
  return elements.map(element => {
    if (element.id === firstElement.id) {
      return secondElement;
    }

    if (element.id === secondElement.id) {
      return firstElement;
    }

    return element;
  });
};
