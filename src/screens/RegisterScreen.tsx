import { RegisterForm } from "components/forms/RegisterForm";
import { TitleText, ViewWrapper } from "components/index";

export const RegisterScreen = () => {
    return(
        <ViewWrapper>
            <TitleText label="Inscription" />
            <RegisterForm />
        </ViewWrapper>
    )
}