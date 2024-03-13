import React from "react";
import "./styles.css";

const Square = () => {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue(x);
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

const App = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default App;
