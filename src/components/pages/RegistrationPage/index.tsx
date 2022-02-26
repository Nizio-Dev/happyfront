import RegistrationForm from "../../organisms/AuthenticationForms/Register"
import AuthenticationTemplate from "../../templates/AuthenticationTemplate";

const RegistrationPage = () =>{


    const someCallToApi = (event: any) => {
        event.preventDefault();
        console.log("Registered!");
    }

    const registration = <RegistrationForm onSubmit={someCallToApi}/>

    return(
        <AuthenticationTemplate imagePath="/images/svg/register.svg" form={registration}/>
    )
}

export default RegistrationPage;