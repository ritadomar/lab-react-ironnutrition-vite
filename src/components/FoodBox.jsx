function FoodBox({ food, deleteFood }) {
  return (
    <article>
      <p>{food.name}</p>
      <img src={food.image} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total calories: {food.servings * food.calories}</b> kcal
      </p>
      <button onClick={() => deleteFood(food.id)}>Delete</button>
    </article>
  );
}

export default FoodBox;
