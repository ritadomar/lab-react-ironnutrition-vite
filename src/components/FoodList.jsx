import { useState } from 'react';

import foodData from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function FoodList() {
  const [foods, setFoods] = useState(foodData);

  const deleteFood = id => {
    const filteredFood = foods.filter(food => id !== food.id);
    setFoods(filteredFood);
  };

  const addNewFood = food => {
    const newFoodsList = [food, ...foods];
    setFoods(newFoodsList);
  };
  return (
    <>
      <AddFoodForm addNewFood={addNewFood} />
      <h1>Food List</h1>
      <hr />
      {foods.map(food => {
        return <FoodBox food={food} key={food.id} deleteFood={deleteFood} />;
      })}
    </>
  );
}

export default FoodList;
