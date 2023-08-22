import styled from "./inpu.module.css"
function Input(props){

    return(<div className={styled.inputWrapper}>

        <label>
            {props.label}
        </label>
        <input name={props.name} onChange={props.handleChanger} type={props.type} />


    </div>)

    
}

export default Input