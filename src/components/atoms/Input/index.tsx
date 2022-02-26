import { KeyboardEventHandler } from 'react';
import './style.scss';


type InputProps = {
    className?: string,
    value?: string,
    placeholder?: string,
    centered?: boolean,
    onKeyUp?: KeyboardEventHandler<InputProps>,
}



const Input = (props: InputProps) =>{

    const {className, value, placeholder, centered, onKeyUp} = props;

    return(
        <input 
            className={className+` ${centered ? "centered" : null}`} 
            value={value} 
            onKeyUp={onKeyUp}
            placeholder={placeholder}
        />
    )
}


export default Input;


