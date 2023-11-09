// import { useEffect, useState } from 'react';
import useHttp from '../hooks/useHttp';
import MealItem from './MealItem';

const req = {};

const Meals = () => {
  // const [meals, setMeals] = useState([]);

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch('http://localhost:3000/meals');
  //     if (!response.ok) {
  //     }

  //     const mealsData = await response.json();
  //     setMeals(mealsData);
  //   };

  //   fetchMeals();
  // }, []);

  const {
    data: meals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', req, []);
  if (isLoading) return <p>Fetching meals...</p>;
  console.log('🚀 ~ file: Meals.jsx:26 ~ Meals ~ meals:', meals);

  return (
    <ul id='meals'>
      {meals.map(meal => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
