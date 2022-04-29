
const Buttons = (props) => {
    return(
        <button className='bg-[#180138] hover:border hover:border-[#180138] transition hover:bg-[#b81f75] hover:text-[#180138]  border border-[#f40f90] rounded-sm' onClick={props.clickHandler}>{props.value}</button>
    )
}

export default Buttons