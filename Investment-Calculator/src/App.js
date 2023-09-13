import Form from "./components/Form";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import React from "react";

function App() {
  const [yearlyData, setYearlyData] = React.useState([]);

  return (
    <div>
      <Header />
      <Form setYearlyData={setYearlyData} />
      {yearlyData.length > 0 ? (
        <ResultTable yearlyData={yearlyData} />
      ) : (
        <p>No investment calculated yet.</p>
      )}
    </div>
  );
}

export default App;
