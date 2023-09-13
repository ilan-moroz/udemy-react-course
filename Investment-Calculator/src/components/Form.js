import React from "react";
import calculateHandler from "../CalculateHandler";

const INITIAL_STATE = {
  currentSavings: "",
  yearlySavings: "",
  expectedReturn: "",
  investmentDuration: "",
};

const Form = props => {
  const [formData, setFormData] = React.useState(INITIAL_STATE);

  const inputChangedHandler = (input, value) => {
    setFormData(prev => {
      return { ...prev, [input]: value };
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const yearlyData = calculateHandler(formData);
    props.setYearlyData(yearlyData);
    formResetHandler();
  };

  const formResetHandler = () => {
    setFormData(INITIAL_STATE);
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
            onChange={e =>
              inputChangedHandler("currentSavings", e.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formData.yearlySavings}
            onChange={e => inputChangedHandler("yearlySavings", e.target.value)}
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
            onChange={e =>
              inputChangedHandler("expectedReturn", e.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formData.investmentDuration}
            onChange={e =>
              inputChangedHandler("investmentDuration", e.target.value)
            }
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
