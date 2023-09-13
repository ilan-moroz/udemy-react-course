const ResultTable = props => {
  let totalInterestGained = 0;
  let totalInvestedCapital = 0;

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((data, index) => {
          totalInterestGained += data.yearlyInterest;
          totalInvestedCapital = data.yearlyContribution * (index + 1);

          return (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.savingsEndOfYear.toFixed(2)}</td>
              <td>{data.yearlyInterest.toFixed(2)}</td>
              <td>{totalInterestGained.toFixed(2)}</td>
              <td>{totalInvestedCapital.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;
