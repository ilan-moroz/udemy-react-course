import Form from "./components/Form";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    currentSavings: "",
    yearlySavings: "",
    expectedReturn: "",
    investmentDuration: "",
  });

  const [yearlyData, setYearlyData] = React.useState([]);

  return (
    <div>
      <Header />
      <Form
        setFormData={setFormData}
        formData={formData}
        setYearlyData={setYearlyData}
      />
      {yearlyData.length > 0 && <ResultTable yearlyData={yearlyData} />}
    </div>
  );
}

export default App;
