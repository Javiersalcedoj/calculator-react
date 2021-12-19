import React from "react";
import '../Styles/Display.css'

function Display({ children }) {
  
  return (
    <div className="display">
      { children }
    </div>
  );
}

export {Display}