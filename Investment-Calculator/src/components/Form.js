import React from "react";
import calculateHandler from "../CalculateHandler";

const Form = props => {
  const currentSavingsHandler = e => {
    props.setFormData(prev => {
      return { ...prev, currentSavings: e.target.value };
    });
  };
  const yearlySavingsHandler = e => {
    props.setFormData(prev => {
      return { ...prev, yearlySavings: e.target.value };
    });
  };
  const expectedReturnHandler = e => {
    props.setFormData(prev => {
      return { ...prev, expectedReturn: e.target.value };
    });
  };
  const investmentDurationHandler = e => {
    props.setFormData(prev => {
      return { ...prev, investmentDuration: e.target.value };
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const yearlyData = calculateHandler(props.formData);
    props.setYearlyData(yearlyData);
    formResetHandler();
  };

  const formResetHandler = () => {
    props.setFormData({
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
            value={props.formData.currentSavings}
            onChange={currentSavingsHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={props.formData.yearlySavings}
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
            value={props.formData.expectedReturn}
            onChange={expectedReturnHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={props.formData.investmentDuration}
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
