import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React from "react";

const AvailableMeals = () => {
  const [mealData, setMealData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchMeals = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-http-fc3c5-default-rtdb.firebaseio.com//meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const newMealData = [];
      for (const key in data) {
        for (let i = 0; i < data[key].length; i++) {
          newMealData.push({
            id: data[key][i].id,
            name: data[key][i].name,
            description: data[key][i].description,
            price: data[key][i].price,
          });
        }
      }
      setMealData(newMealData);
    } catch (err) {
      console.error(err);
      setError(err);
    }
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const mealsList = mealData.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      price={meal.price}
      name={meal.name}
      description={meal.description}
    />
  ));

  if (error) {
    return <section className={classes.meals}>{error.message}</section>;
  }

  return (
    <section className={classes.meals}>
      <Card>{isLoading ? <p>Loading meals...</p> : <ul>{mealsList}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
