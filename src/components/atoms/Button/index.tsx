import { MouseEventHandler, ReactNode } from 'react';
import './style.scss';


type ButtonProps = {
    children: ReactNode,
    secondary?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}



const Button = (props: ButtonProps) =>{

    const {children, secondary, onClick} = props;

    return(
        <button onClick={onClick} className={`btn btn-small ${secondary ? "secondary" : null}`}>
            {children}
        </button>
    )
}


export default Button;


