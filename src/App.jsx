import './App.css';
import { ConfigProvider, theme } from 'antd';

import FoodList from './components/FoodList';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#87e8de',
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="App" style={{ width: 1200 }}>
        <FoodList />
      </div>
    </ConfigProvider>
  );
}

export default App;
