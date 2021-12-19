import React from "react";
import { Button } from "./Button";
import '../Styles/Keyboard.css'
import backSpace from '../SVG/backspace_black.svg'

function Keyboard({ operation, setOperation, setToggleEqual, toggleEqual }) {

  const addOperation = (elemt) => {
    const array = [...operation];
    const index = array.length - 1;

    if (elemt === '+' || elemt === '-' || elemt === '÷' || elemt === '×' ) {
      const last = array[index];
      if (last === '+' || last === '-' || last === '÷' || last === '×' ) {
        array.splice(index, 1);
      }
    }
    setToggleEqual(false)
    array.push(elemt)
    setOperation(array)
  }
  const deleted = () =>{
    if (toggleEqual) {
      setToggleEqual(false);
      setOperation([]);
    } else {
      const array = [...operation];
      const index = array.length - 1;
      array.splice(index, 1)
      setOperation(array)
    }
  }
  const resultFuntion = () => {
    setToggleEqual(true)
  }
  return (
    <div className="keyboard">
      <div className="keyboard--left">
        <Button symbol='7' addOperation={addOperation}/>
        <Button symbol='8' addOperation={addOperation}/>
        <Button symbol='9' addOperation={addOperation}/>
        <Button symbol='4' addOperation={addOperation}/>
        <Button symbol='5' addOperation={addOperation}/>
        <Button symbol='6' addOperation={addOperation}/>
        <Button symbol='1' addOperation={addOperation}/>
        <Button symbol='2' addOperation={addOperation}/>
        <Button symbol='3' addOperation={addOperation}/>
        <Button symbol='0' addOperation={addOperation}/>
        <Button symbol='.' addOperation={addOperation}/>
        <Button symbol='=' addOperation={resultFuntion}/>

      </div>
      <div className="keyboard--right">
        <Button symbol={<img src={backSpace} alt="Remove" />} addOperation={deleted}/>
        <Button symbol='÷' addOperation={addOperation}/>
        <Button symbol='×' addOperation={addOperation}/>
        <Button symbol='-' addOperation={addOperation}/>
        <Button symbol='+' addOperation={addOperation}/>
      </div>
    </div>
  );
}

export { Keyboard}