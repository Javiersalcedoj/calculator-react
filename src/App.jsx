import React, { useEffect } from "react";
import { Display } from "./Components/Display";
import { Keyboard } from "./Components/Keyboard";
import { Calculator } from "./Logic/calculator";
import './Styles/App.css';

function App() {
  const [mathOperation, setMathOperation] = React.useState([]);
  const [result, setResult] = React.useState('');
  const [toggleEqual, setToggleEqual ] = React.useState (false) 

  useEffect (()=>{
    setResult(Calculator(mathOperation))
  }, [mathOperation])


  return (
    <div className="Calculator">
      <Display >
        <p className={`display__operation ${!!toggleEqual && 'display__operation--grey' }`}>{mathOperation.join('')}</p>
        <p className="display__result">{result}</p>
      </Display>
      <Keyboard operation={mathOperation} setOperation={setMathOperation} setToggleEqual={setToggleEqual} toggleEqual={toggleEqual}/>

    </div>
  );
}

export default App;
