import Button from '../../../atoms/Button';
import '../sharedStyle.scss';
import '../../../utility/_flex.scss';
import '../../../utility/_sizing.scss';
import '../../../utility/_spacing.scss';
import { Link } from 'react-router-dom';
import Input from '../../../atoms/Input';

type RegisterFormProps = {
    onSubmit: (event: any) => any
}

const RegistrationForm = (props: RegisterFormProps) =>{

    const {onSubmit} = props;

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmit}>
                <h1 className="mb-4">
                    Signup
                </h1>

                <Input placeholder="Email" className="mb-2" centered/>
                <Input placeholder="Password" className="mb-2" centered/>
                <Input placeholder="Repeat password" className="mb-4" centered/>

                <div className="row space-evenly w-full mb-3">
                    <Link to="/">
                        <Button>
                            Back
                        </Button>
                    </Link>

                    <Button>
                        Register
                    </Button>
                </div>
                    <Link className="reset-link" to="reset_password">
                        Reset password
                    </Link>
            </form>
        </div>
    )
}

export default RegistrationForm;