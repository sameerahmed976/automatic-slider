export const getElement = (selector) => {
  if (selector) {
    return document.querySelector(selector);
  }
  throw new Error(`The selector has no  ${selector}`);
};
