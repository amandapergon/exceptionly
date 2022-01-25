import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { StyledForm } from "./styles";

const FormPropsTextFields = ({ href }) => {
  return (
    <StyledForm>
      <TextField
        required
        label="Email"
        type={"email"}
        variant="standard"
        fullWidth
      />
      <TextField
        required
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
      />
      <span id="under-login-form-text">
        <Checkbox size="small" sx={{ padding: 0 }} />
        Remember Me
        <a href={href}>Forgot Password?</a>
      </span>
    </StyledForm>
  );
};

export default FormPropsTextFields;
