import Form from "./components/Form";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import React from "react";

function App() {
  const [yearlyData, setYearlyData] = React.useState([]);
  const [userInput, setUserInput] = React.useState([]);

  return (
    <div>
      <Header />
      <Form setYearlyData={setYearlyData} setUserInput={setUserInput} />
      {yearlyData.length > 0 ? (
        <ResultTable
          yearlyData={yearlyData}
          initial={userInput.currentSavings}
        />
      ) : (
        <p>No investment calculated yet.</p>
      )}
    </div>
  );
}

export default App;
