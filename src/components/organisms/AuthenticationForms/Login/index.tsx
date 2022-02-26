import { Link } from "react-router-dom";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";

type LoginFormProps = {
    onSubmit: (event: any) => any
}

const LoginForm = (props: LoginFormProps) =>{

    const {onSubmit} = props;

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmit}>
                <h1 className="mb-4">
                    Signin
                </h1>

                <Input placeholder="Email" className="mb-2" centered/>
                <Input placeholder="Password" className="mb-2" centered/>

                <div className="row space-evenly w-full mb-3">
                    <Link to="user">
                        <Button>
                            Login
                        </Button>
                    </Link>

                    <Link to="register">
                        <Button>
                            Register
                        </Button>
                    </Link>
                </div>
                <Link className="reset-link" to="reset_password">
                    Reset password
                </Link>

            </form>
        </div>
    )
}

export default LoginForm;