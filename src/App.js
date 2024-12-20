import { useState } from "react";

function App() {

  const [calc, SetCalc] = useState("");
  const [result, SetResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];


  const updateCalc = value =>{

    if (
      ops.includes(value) && calc === '' || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    SetCalc(calc + value);

    if(!ops.includes(value)){
      SetResult(eval(calc + value).toString());
    }
  }

  const createDigits = () =>{
    const digits = [];
    for(let i = 1; i < 10; i++){
        digits.push(
          <button onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>
        )
    }
    return digits;
  }


        const calculate = () =>{
          SetCalc(eval(calc).toString());
        }


        const deleteLast = () =>{
          if(calc == ''){
            return;
          }

          const value = calc.slice(0, -1);
          SetCalc(value)
        }

  return (
    <div className="App">
        <div className='calculator'>

         <div className='display'>

          { result ? <span>({result})</span> : '' }
           
          { calc || "0" }

         </div>

         <div className='operators'>
             <button  onClick={()=> updateCalc('/') } >/</button>  
             <button onClick={()=> updateCalc('*')} >*</button>
             <button onClick={()=> updateCalc('+')} >+</button>
             <button onClick={()=> updateCalc('-')} >-</button> 

             <button onClick={deleteLast} >Del</button>
         </div>

         <div className='digits'>
              {createDigits()}
              <button onClick={()=> updateCalc('0')} >0</button>
              <button onClick={()=> updateCalc('.')} >.</button>
              <button onClick={calculate} >=</button>
         </div>


        </div>
    </div>
  );
}

export default App;
