import "./css/reset.css";
import AllPagesBackground from "./components/background";
import FormContainer from "./components/formContainer";
import dotLogo from "./assets/dot_logo.png";
import wordLogo from "./assets/word_logo.png";

function App() {
  return (
    <AllPagesBackground>
      <FormContainer
        leftImage={dotLogo}
        leftaltText={"Exceptionly Logo"}
        title={"WELCOME TO THE MARKETPLACE"}
        leftText={
          "Exceptionly provides hands on tested remote software engineers unlike any other outsourcing company. Our product delivers talent directly for hiring without a lifetime markup over 400%"
        }
        footerText={"Don't have an account?"}
        href={"https://www.google.com.br/"}
        footerLink={"CREATE AN ACCOUNT"}
        rightImage={wordLogo}
        rightAltText="Word Logo Exceptionly"
        rightText={"Sign in to your account"}
      ></FormContainer>
    </AllPagesBackground>
  );
}

export default App;
