import React from "react";
import Main from "../Main";
import Emitter from "../../emitter";
import './app.scss';

const App = () => {
  const handleClick = (): void => {
    Emitter.emit("SAVE_CHANGES", {});
  };

  return (
    <div className='app'>
      <Main />
      <button type="button" onClick={handleClick}>Save</button>
    </div>
  );
};

export default App;
