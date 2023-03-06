export const hasError = (stateObj) => {
  let toReturn = false;

  for (let state in stateObj) {
    if (stateObj[state].errorMsg) {
      toReturn = true;
    }
  }
  return toReturn;
};
