export const removeElementFromArray = (element, oldArray) => {
    const newArray = oldArray.filter(el => el !== element);
    return newArray;
}