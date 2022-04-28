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
    <div className="result-div  w-[460px] h-[110px] p-4 bg-violet-100 m-1 rounded">
        <div className="previous-state text-2xl text-gray-600">{previousValue}</div>
        <div className="current-state text-5xl text-gray-800">{currValue}</div>
    </div>

    <div className="grid grid-cols-4 grid-rows-5 gap-1 text-gray-900 ">

        <button onClick={clearAllHandler} className='bg-purple-300 rounded'>C</button>

        <button onClick={clearOnceHandler} className='col-span-2 bg-purple-300 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
        </button>
        <button onClick={result} className='row-span-2 bg-purple-300 w-28 h-36 rounded'>=</button>
        
        <button onClick={add1} className='bg-purple-300 rounded'>1</button>
        <button onClick={add2} className='bg-purple-300 rounded'>2</button>
        <button onClick={add3} className='bg-purple-300 rounded'>3</button>

        <button onClick={add4} className='bg-purple-300 rounded'>4</button>
        <button onClick={add5} className='bg-purple-300 rounded'>5</button>
        <button onClick={add6} className='bg-purple-300 rounded'>6</button>
        <button onClick={subtractOperator} className='bg-purple-300 rounded'>-</button>

        <button onClick={add7} className='bg-purple-300 rounded'>7</button>
        <button onClick={add8} className='bg-purple-300 rounded'>8</button>
        <button onClick={add9} className='bg-purple-300 rounded'>9</button>
        <button onClick={multiplyOperator} className='bg-purple-300 rounded'>*</button>

        <button onClick={add0} className='col-span-2 bg-purple-300 rounded'>0</button>
        <button onClick={addOperator} className='bg-purple-300 rounded'>+</button>      
        <button onClick={divideOperator} className='bg-purple-300 rounded'>/</button>
        
    </div>
        
    </>
    )
}

export default Buttons