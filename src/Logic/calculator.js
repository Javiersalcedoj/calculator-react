function Calculator (mathOperation) {
  const array = [...mathOperation];
  const newArray = []
  let number = [];

  //verificamos que lo ultimo ingresado no sea una multiplicacion o divicion
  if (array[array.length -1] === '×' || array[array.length -1] === '÷' ) {
    array.splice((array.length -1 ), 1)
  }

  //creamos un array que si pueda ser utilizado por eval
  array.map((elemt) => {
    if (elemt === '+' || elemt === '-' || elemt === '÷' || elemt === '×' ) {
      number = Number(number.join(''))
      newArray.push(number);
      number = []

      if (elemt === '÷') {
        newArray.push('/')
      } else if (elemt === '×') {
        newArray.push('*')
      } else {
        newArray.push(elemt)
      }

    } else {
      number.push(elemt)
    }
  })
  number = Number(number.join(''))
  newArray.push(number);
  
  //hacemos el calculo usando eval
  let result = String(eval(newArray.join('')));

  if (result === 'NaN' || result === 'Infinity' || result === '-Infinity') {
    return '∞';
  } 
  return result;
}

export { Calculator }