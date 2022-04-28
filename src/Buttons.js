import { useReducer, useState } from "react"

const reducerFn = (latestState, action) => {
    if(action.type==='ADD_NO'){
        if(latestState === '0'){
            return action.value
        }
        else{
            return latestState + action.value
        }
    }
    if(action.type === 'OPERATION'){
        if(action.operator !== ''){
            return '0'
        }
    }
    if(action.type === 'RESULT'){
        let no2 = +action.value1
        let no1= +action.value2
        if(action.operator === '+'){ return no1+no2 }
        if(action.operator === '-'){ return no1-no2 }
        if(action.operator === '*'){ return no1*no2 }
        if(action.operator === '/'){ return no1/no2 }
       
    }
    if(action.type === 'CLEAR_ALL'){
        return '0'
    }
    if(action.type === 'CLEAR_ONCE'){
        let str = latestState
        let len = str.length
        let res = str.slice(0, len-1)
        return res
    }
}

const Buttons = () => {

    const [previousValue, setPreviousValue] = useState('0')

    const [operator, setOperator] = useState('')

    const [currValue, dispatchActionFn] = useReducer(reducerFn,'0')

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

    const addOperator = () => {
        setOperator('+')
        console.log(operator)
        dispatchActionFn({type:'OPERATION', operator: '+', value: currValue })
        setPreviousValue(currValue)
    }

    const multiplyOperator = () => {
        setOperator('*')
        dispatchActionFn({type:'OPERATION', operator: '*', value: currValue })
        setPreviousValue(currValue)
    }

    const subtractOperator = () => {
        setOperator('-')
        dispatchActionFn({type:'OPERATION', operator: '-', value: currValue })
        setPreviousValue(currValue)
    }

    const divideOperator = () => {
        setOperator('/')
        dispatchActionFn({type:'OPERATION', operator: '/', value: currValue })
        setPreviousValue(currValue)
    }

    const result = () => {
        dispatchActionFn({type:'RESULT', value1: currValue, value2: previousValue, operator: operator})
        setPreviousValue(currValue)
    }

    const clearAllHandler = () => {
        dispatchActionFn({type: 'CLEAR_ALL'})
        setPreviousValue('0')
        setOperator('')
    }

    const clearOnceHandler = () => {
        dispatchActionFn({type: 'CLEAR_ONCE'})
    }

    return(
    <>
    <div className="result-div">
        <div className="previous-state">{previousValue}</div>
        <div className="current-state">{currValue}</div>
    </div>
    <div>
        <button onClick={add1}>1</button>
        <button onClick={add2}>2</button>
        <button onClick={add3}>3</button>
        <button onClick={add4}>4</button>
        <button onClick={add5}>5</button>
        <button onClick={add6}>6</button>
        <button onClick={add7}>7</button>
        <button onClick={add8}>8</button>
        <button onClick={add9}>9</button>
        <button onClick={add0}>0</button>
        <button onClick={addOperator}>+</button>
        <button onClick={subtractOperator}>-</button>
        <button onClick={multiplyOperator}>*</button>
        <button onClick={divideOperator}>/</button>
        <button onClick={clearAllHandler}>C</button>
        <button onClick={clearOnceHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
        </button>
        <button onClick={result}>=</button>

    </div>
        
    </>
    )
}

export default Buttons