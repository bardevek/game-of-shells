export const swapElements = (data, firstElement, secondElement) => {
    return data.map(d => {
        if (d.id === firstElement.id) {
            return secondElement;
        }

        if (d.id === secondElement.id) {
            return firstElement;
        }

        return d;
    });
};