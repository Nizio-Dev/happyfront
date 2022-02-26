import { ReactNode } from 'react';
import './style.scss';

type AuthenticationTemplateProps = {
    form: ReactNode,
    imagePath: string
}

const AuthenticationTemplate = (props:AuthenticationTemplateProps) =>{

    const {form, imagePath} = props;

    return(
        <div className="authentication-wrapper">
            <div className="authentication">
                <img className="side-image" src={imagePath}/>
                {form}
            </div>
        </div>
)
}


export default AuthenticationTemplate;