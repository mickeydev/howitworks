
import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(prevState => !prevState);
  }

  return (
    <div className="card">
      <p>Hi There!</p>
      {toggle && <p>Some text must be here</p>}
    <Button show={toggleHandler}>Toggler</Button>
    </div>
  );
}

export default App;
