import { useState } from 'react';
import { Divider, Row } from 'antd';

import foodData from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';

function FoodList() {
  const [foods, setFoods] = useState(foodData);
  const [showFoods, setShowFoods] = useState(foods);

  const deleteFood = id => {
    const filteredFood = foods.filter(food => id !== food.id);
    setFoods(filteredFood);
    setShowFoods(filteredFood);
  };

  const addNewFood = food => {
    const newFoodsList = [food, ...foods];
    setFoods(newFoodsList);
    setShowFoods(newFoodsList);
  };

  const searchFood = query => {
    const searchedFoods = foods.filter(food =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFoods(searchedFoods);
  };

  return (
    <>
      <AddFoodForm addNewFood={addNewFood} />
      <Divider>
        <h1>Food List</h1>
      </Divider>

      <SearchBar search={searchFood} />

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoods.map(food => {
          return <FoodBox food={food} key={food.id} deleteFood={deleteFood} />;
        })}
      </Row>
    </>
  );
}

export default FoodList;
