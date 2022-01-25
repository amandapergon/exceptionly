import { StyledFormContainer } from "./styles";

const FormContainer = ({
  leftImage,
  leftAltText,
  title,
  leftText,
  rightImage,
  rightAltText,
  rightText,
  children,
  footerText,
  footerLink,
  href,
}) => {
  return (
    <StyledFormContainer>
      <div id="left">
        <img src={leftImage} alt={leftAltText} />
        <div>
          <h1>{title}</h1>
          <p>{leftText}</p>
        </div>
      </div>
      <div id="right">
        <div>
          <img src={rightImage} alt={rightAltText} />
          <p>{rightText}</p>
        </div>
        {children}
        <footer>
          <span>
            {footerText} <a href={href}>{footerLink}</a>
          </span>
        </footer>
      </div>
    </StyledFormContainer>
  );
};

export default FormContainer;
