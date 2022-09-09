import React, { useState } from 'react';
import CalcScreen from './screen';
import AllButton from './button';

function CalcBody() {
  const buttons = ['C','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];

  let [cVal, setVal] = useState('')

  const clickHandler = (e) => {
    let thisVal = e.target.innerHTML
    setVal(cVal + thisVal)
  };

  let clearInput = () => {
    let newVal = cVal.toString().slice(0,-1);
    setVal(newVal);
  };

  const totalClickHandler = (e) => {
    let totalCalc = eval(cVal);
    setVal(totalCalc)
  };

  return (
    <div className='calcBody'>
        <CalcScreen value={cVal === '' ? 0 : cVal} />
        
        <div className='keyBoared'>
          {
            buttons.map( item => {
              return (
                <AllButton val={item} clearInput={clearInput} clickHandler={clickHandler} totalClickHandler={totalClickHandler} />
                )
            })
          }
        </div>
    </div>
  )
}

export default CalcBody