import { Link } from "react-router-dom";
import AllPagesBackground from "../../components/background";
import FormPropsTextFields from "../../components/logInForm";
import FormContainer from "../../components/formContainer";
import dotLogo from "../../assets/dot_logo.png";
import wordLogo from "../../assets/word_logo.png";

const LoginPage = () => {
  return (
    <AllPagesBackground>
      <FormContainer
        leftImage={dotLogo}
        leftaltText={"Exceptionly Logo"}
        title={"WELCOME TO THE MARKETPLACE"}
        leftText={
          "Exceptionly provides hands on tested remote software engineers unlike any other outsourcing company. Our product delivers talent directly for hiring without a lifetime markup over 400%"
        }
        rightImage={wordLogo}
        rightText={"Sign in to your account"}
        rightAltText={"Word Logo Exceptionly"}
        footerText={"Don't have an account?"}
        footerLink={<Link to="signup">CREATE AN ACCOUNT</Link>}
      >
        <FormPropsTextFields href={"/passwordRecovery"} />
        {/* <LoginButtons /> */}
      </FormContainer>
    </AllPagesBackground>
  );
};

export default LoginPage;
