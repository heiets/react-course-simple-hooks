import './App.css';

import { Input } from './Input';
import { Card } from './Card';

function App() {
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
