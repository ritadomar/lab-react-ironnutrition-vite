import { useState } from 'react';

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
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSumbit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleImage}
        />
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          value={calories}
          onChange={handleCalories}
        />
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          id="servings"
          value={servings}
          onChange={handleServings}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default AddFoodForm;
