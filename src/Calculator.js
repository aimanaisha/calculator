import { useReducer } from "react"
import Buttons from "./Buttons"

const defaultState = {
    currValue: '0',
    previousValue: '',
    operator: ''
}

const reducerFn = (latestState, action) => {

    if(action.type==='ADD_NO'){

        if(latestState.currValue.length === 22){
            return{
                ...latestState,
                currValue: latestState.currValue
            }
        }

        if(latestState.currValue === '0' && action.value !== '.'){
            return {
            ...latestState,
            currValue: action.value
            }
        }
        else{
            return {
                ...latestState,
                currValue: latestState.currValue + action.value
            }
        }
    }
    if(action.type === 'OPERATION'){

        if(action.currValue === '0' && action.previousValue === ''){
            return{
                ...latestState
            }
        }
        if(action.currValue === '0' && action.previousValue !== '' && action.operator !== ''){
            return{
                ...latestState,
                operator: action.operator
            }
        }
        
        return{
            currValue: '0',
            previousValue: action.currValue,
            operator: action.operator
        }
        
    }
    if(action.type === 'RESULT'){

        if(action.currValue !== '0' && action.previousValue !== '' && action.operator !== ''){

            let num1 = +action.previousValue
            let num2 = +action.currValue

            const operator = '', previousValue = action.currValue;
            var currValue;

            switch (action.operator) {
                case '+':
                    currValue  = num1 + num2;
                    break;
                case '-':
                    currValue = num1 - num2;
                    break;
                case '*':
                    currValue  = num1 * num2;
                    break;
                case '/':
                    currValue = num1 / num2;
                    break;
            
                default:
                    break;
            }
            return {
                operator, previousValue, currValue: currValue.toString()
            }
                
        }
        else{
            return {...latestState}
        }

    }
    if(action.type === 'CLEAR_ALL'){
        return {
            currValue: '0',
            previousValue: '',
            operator: ''
        }
    }
    if(action.type === 'CLEAR_ONCE'){

        let currString = latestState.currValue.toString()
        return{
            ...latestState,
            currValue: latestState.currValue.length === 1 ? '0' : currString.slice(0, currString.length - 1)
        }
    }
}

const Calculator = () => {


    const [{currValue, previousValue, operator}, dispatchActionFn] = useReducer(reducerFn, defaultState)

    const add1 = () => {dispatchActionFn({type:'ADD_NO', value: '1'})}
    const add2 = () => {dispatchActionFn({type:'ADD_NO', value: '2'})}
    const add3 = () => {dispatchActionFn({type:'ADD_NO', value: '3'})}
    const add4 = () => {dispatchActionFn({type:'ADD_NO', value: '4'})}
    const add5 = () => {dispatchActionFn({type:'ADD_NO', value: '5'})}
    const add6 = () => {dispatchActionFn({type:'ADD_NO', value: '6'})}
    const add7 = () => {dispatchActionFn({type:'ADD_NO', value: '7'})}
    const add8 = () => {dispatchActionFn({type:'ADD_NO', value: '8'})}
    const add9 = () => {dispatchActionFn({type:'ADD_NO', value: '9'})}
    const add0 = () => {dispatchActionFn({type:'ADD_NO', value: '0'})}
    const addDecimal = () => {dispatchActionFn({type:'ADD_NO', value: '.'})}

    const addOperator = () => {   
        dispatchActionFn({type:'OPERATION', operator: '+', currValue: currValue, previousValue: previousValue })
    }

    const multiplyOperator = () => {        
        dispatchActionFn({type:'OPERATION', operator: '*', currValue: currValue, previousValue: previousValue })
    }

    const subtractOperator = () => {    
        dispatchActionFn({type:'OPERATION', operator: '-', currValue: currValue, previousValue: previousValue })
    }

    const divideOperator = () => {        
        dispatchActionFn({type:'OPERATION', operator: '/', currValue: currValue, previousValue: previousValue })
    }

    const result = () => {
        dispatchActionFn({type:'RESULT', currValue: currValue, previousValue: previousValue, operator: operator})    
    }

    const clearAllHandler = () => {
        dispatchActionFn({type: 'CLEAR_ALL'})
        
    }

    const clearOnceHandler = () => {
        dispatchActionFn({type: 'CLEAR_ONCE'})
    }

    const resultClass = `${currValue.length >= 14 ? 'text-3xl text-[#180138]' : 'text-5xl text-[#180138]'}`

    return(
    <>
        <div className="result-div p-4 pt-5 bg-[#d62290] m-1 rounded-sm w-[450px] h-[150px] border border-[1.5px] border-[#180138]">
            <div className="text-2xl text-[#2e1a55] mb-3">{previousValue}<span>{operator}</span></div>
            <div className={resultClass}>{currValue}</div>
        </div>

        <div className="grid grid-cols-4 grid-rows-5 gap-1 w-[450px] h-[430px] text-[#f40f90] ">

            <Buttons clickHandler={clearAllHandler} value='AC'/>

            <button onClick={clearOnceHandler} className='col-span-2 bg-[#180138] transition hover:border hover:border-[#180138] hover:bg-[#b81f75] border border-[#f40f90] hover:text-[#180138] rounded-sm'><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#f40f90] hover:text-[#180138]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            </button>
            <Buttons clickHandler={result} value='=' />
        
        
            <Buttons clickHandler={add1} value='1'/>
            <Buttons clickHandler={add2} value='2'/>
            <Buttons clickHandler={add3} value='3'/>
            <Buttons clickHandler={addOperator} value='+'/>

            <Buttons clickHandler={add4} value='4'/>
            <Buttons clickHandler={add5} value='5'/>
            <Buttons clickHandler={add6} value='6'/>
            <Buttons clickHandler={subtractOperator} value='-'/>

            <Buttons clickHandler={add7} value='7'/>
            <Buttons clickHandler={add8} value='8'/>
            <Buttons clickHandler={add9} value='9'/>
            <Buttons clickHandler={multiplyOperator} value='*'/>

            <button onClick={add0} className='col-span-2 bg-[#180138] hover:border hover:border-[#180138] transition hover:bg-[#b81f75] hover:text-[#180138] border border-[#f40f90]  rounded-sm'>0</button>
            <Buttons clickHandler={addDecimal} value='.'/>      
            <Buttons clickHandler={divideOperator} value='/'/>
        
        </div>
        
    </>
    )
}

export default Calculator