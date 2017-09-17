module.exports = function zeros(expression) {
  if (expression.indexOf('*') === -1){
    return getFactorialOfOneItem(expression);
  } else {
      const splitExpr = expression.split('*');
      const checkOnEvenNubm = splitExpr.some(item => {
        item = parseInt(item);
        return item %2 === 0;
      });
      const checkOnScreamNumb = splitExpr.some(item => item.split('!').length-1 === 1);
      const numberOfNulls = splitExpr.reduce((previousValue, currenntValue, index) => {
        if (checkOnEvenNubm || checkOnScreamNumb){
          return index === 1
                  ? getFactorialOfOneItem(previousValue) + getFactorialOfOneItem(currenntValue)
                  : previousValue + getFactorialOfOneItem(currenntValue);
        } else return 0;
      });
      return numberOfNulls;
  }
}

function factorialAcrossOne(number){
  if (number%2 === 0) {
    return parseInt(number/10) + parseInt(number/50);
  }
  if (number%2 !== 0 && number<10) {
    return parseInt(number/5) + parseInt(number/25);
  }
  if (number%2 !== 0 && number>10 && number<50) {
    return parseInt(number/5) - parseInt(number/10) + parseInt(number/25);
  }
  if (number%2 !== 0 && number>10 && number>=50) {
    return parseInt(number/5) - parseInt(number/10) + parseInt(number/25) - 1;
  }
}

function getFactorialOfOneItem(str){
  const num = parseInt(str);
  return str.split('!').length-1 === 1 ? parseInt(num/5) + parseInt(num/25) : factorialAcrossOne(num);
}
