import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { StyledForm } from "./styles";

const FormPropsTextFields = ({ href }) => {
  return (
    <StyledForm>
      <TextField
        id="outlined-required"
        label="Email *"
        type={"email"}
        variant="standard"
        fullWidth
        sx={{ marginBottom: "20px", marginTop: "24px" }}
      />
      <TextField
        id="outlined-required"
        label="Password *"
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
        sx={{ marginBottom: "18px" }}
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
