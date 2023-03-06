export function findObjectByType(obj, str) {
  const matches = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop].type === str) {
      matches[prop] = obj[prop];
    }
  }
  return Object.keys(matches).length ? matches : false;
}