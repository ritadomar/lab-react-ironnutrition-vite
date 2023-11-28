import { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleName = e => setName(e.target.value);
  const handleImage = e => setImage(e.target.value);
  const handleCalories = e => setCalories(e.target.value);
  const handleServings = e => setServings(e.target.value);

  const handleSumbit = e => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
      id: Math.random(),
    };
    addNewFood(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <>
      <Divider>
        <h2>Add Food Entry</h2>
      </Divider>

      <form onSubmit={handleSumbit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="form-field">
          <label htmlFor="image">Image</label>
          <Input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={handleImage}
          />
        </div>
        <div className="form-field">
          <label htmlFor="calories">Calories</label>
          <Input
            type="number"
            name="calories"
            id="calories"
            value={calories}
            onChange={handleCalories}
          />
        </div>
        <div className="form-field">
          <label htmlFor="servings">Servings</label>
          <Input
            type="number"
            name="servings"
            id="servings"
            value={servings}
            onChange={handleServings}
          />
        </div>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </form>
    </>
  );
}

export default AddFoodForm;
