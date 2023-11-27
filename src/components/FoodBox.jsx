import { Card, Col, Button } from 'antd';

function FoodBox({ food, deleteFood }) {
  return (
    <Col>
      <Card title={food.name}>
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} style={{ width: 300 }} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total calories: {food.servings * food.calories}</b> kcal
        </p>
        <Button onClick={() => deleteFood(food.id)}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
