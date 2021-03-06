import { Link } from "react-router-dom";
import AllPagesBackground from "../../components/background";
import FormContainer from "../../components/formContainer";
import dotLogo from "../../assets/dot_logo.png";
import wordLogo from "../../assets/word_logo.png";
import SignUpTextFields from "../../components/signUpForm";

const SignUp = () => {
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
        footerText={"Already have an account?"}
        footerLink={<Link to="/">SIGN IN HERE</Link>}
      >
        <SignUpTextFields />
      </FormContainer>
    </AllPagesBackground>
  );
};

export default SignUp;
