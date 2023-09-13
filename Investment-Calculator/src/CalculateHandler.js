const calculateHandler = userInput => {
  const yearlyData = [];

  let currentSavings = +userInput.currentSavings;
  const yearlyContribution = +userInput.yearlySavings;
  const expectedReturn = +userInput.expectedReturn / 100;
  const duration = +userInput.investmentDuration;

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }
  return yearlyData;
};

export default calculateHandler;
