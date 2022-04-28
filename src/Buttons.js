

const Buttons = () => {

    return(
    <>
    <div className="result-div">
        <div className="previous-state"></div>
        <div className="current-state"></div>
    </div>
    <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>C</button>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
        </button>
        <button>=</button>

    </div>
        
    </>
    )
}

export default Buttons