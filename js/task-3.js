function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);
  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));

//Short version - arrow function:

// const getElementWidth = (content, padding, border) =>
//   parseFloat(content) + 2 * (parseFloat(padding) + parseFloat(border));

// console.log(getElementWidth('50px', '8px', '4px'));
// console.log(getElementWidth('60px', '12px', '8.5px'));
// console.log(getElementWidth('200px', '0px', '0px'));
