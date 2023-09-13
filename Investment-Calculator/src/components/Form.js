import React from "react";
import calculateHandler from "../CalculateHandler";

const Form = props => {
  const [formData, setFormData] = React.useState({
    currentSavings: "",
    yearlySavings: "",
    expectedReturn: "",
    investmentDuration: "",
  });

  const currentSavingsHandler = e => {
    setFormData(prev => {
      return { ...prev, currentSavings: e.target.value };
    });
  };
  const yearlySavingsHandler = e => {
    setFormData(prev => {
      return { ...prev, yearlySavings: e.target.value };
    });
  };
  const expectedReturnHandler = e => {
    setFormData(prev => {
      return { ...prev, expectedReturn: e.target.value };
    });
  };
  const investmentDurationHandler = e => {
    setFormData(prev => {
      return { ...prev, investmentDuration: e.target.value };
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const yearlyData = calculateHandler(formData);
    props.setYearlyData(yearlyData);
    formResetHandler();
  };

  const formResetHandler = () => {
    setFormData({
      currentSavings: "",
      yearlySavings: "",
      expectedReturn: "",
      investmentDuration: "",
    });
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formData.currentSavings}
            onChange={currentSavingsHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formData.yearlySavings}
            onChange={yearlySavingsHandler}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formData.expectedReturn}
            onChange={expectedReturnHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formData.investmentDuration}
            onChange={investmentDurationHandler}
            required
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={formResetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
