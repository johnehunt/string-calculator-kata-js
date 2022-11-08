class StringCalculator {
    add(numberString) {
        if (numberString == '') {
            return 0;
        }
        if (numberString.endsWith(',')) {
          throw new Error('Invalid Terminator Expression');
        }
        const delimiterRegExp = /[,;\n]/
        let numbers = numberString
          .split(delimiterRegExp)
          .filter(num => num < 1001)
          .map(n => parseInt(n));
        let negatives = numbers.filter(num => num < 0);
        if(negatives.length > 0){
          throw new Error('Negative Number Error');
        }
        let finalSum = numbers.reduce((sum, n) =>{
            return sum + n;
          }, 0);
        return finalSum;
    }
}

module.exports = StringCalculator;