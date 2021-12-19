import React from "react";
import '../Styles/Button.css'
function Button ({symbol, addOperation}) {
  return (
    <button className="keyboard__button" onClick={() => addOperation(symbol)}>
      <span>
        {symbol}
      </span>
    </button>

  );
}

export {Button}