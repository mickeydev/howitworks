
import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';
import Demo from './Demo/Demo';

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(prevState => !prevState);
  }

  return (
    <div className="card">
      <p>Hi There!</p>
      <Demo toggle={toggle} />
    <Button show={toggleHandler}>Toggler</Button>
    </div>
  );
}

export default App;
