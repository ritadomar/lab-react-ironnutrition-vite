import { Card, Col, Button } from 'antd';

function FoodBox({ food, deleteFood }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 325, margin: 10 }}>
        <img src={food.image} alt={food.name} style={{ height: 60 }} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total calories: {food.servings * food.calories}</b> kcal
        </p>
        <Button danger onClick={() => deleteFood(food.id)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
