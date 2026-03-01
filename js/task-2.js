function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

////using ternary operator and arrow function (syntax based on the example const sum = (num1, num2) => {return num1 + num2;}, where const sum = : assign the function to a variable, (num1, num2): parameters, => : the arrow separating parameters from the function body, {return num1 + num2}: function body)
//const formatMessage = (message, maxLength) =>
//message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
