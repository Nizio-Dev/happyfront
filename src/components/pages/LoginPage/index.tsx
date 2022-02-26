import LoginForm from "../../organisms/AuthenticationForms/Login"
import AuthenticationTemplate from "../../templates/AuthenticationTemplate";

const LoginPage = () =>{

    const someCallToApi = (event: any) => {
        event.preventDefault();
        console.log("Logged in!");
    }

    const login = <LoginForm onSubmit={someCallToApi}/>

    return(
        <AuthenticationTemplate imagePath="/images/svg/login.svg" form={login}/>
    )
}

export default LoginPage;