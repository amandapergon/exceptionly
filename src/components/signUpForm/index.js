import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { StyledButtons } from "../loginButtons/styles";
import { StyledForm } from "../logInForm/styles";
import { StyledParagraph } from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SignUpTextFields = ({ href }) => {
  return (
    <StyledForm>
      <TextField
        label="Name*"
        type="name"
        variant="standard"
        fullWidth
        sx={{ marginBottom: "15px", marginTop: "24px" }}
      />
      <TextField
        label="Last Name*"
        type="last name"
        variant="standard"
        fullWidth
        sx={{ marginBottom: "18px" }}
      />
      <TextField
        label="Email*"
        type="email"
        variant="standard"
        fullWidth
        sx={{ marginBottom: "18px" }}
      />
      <TextField
        label="Retype Email*"
        type="email"
        variant="standard"
        fullWidth
        sx={{ marginBottom: "18px" }}
      />
      <TextField
        id="outlined-required"
        label="Password*"
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
        sx={{ marginBottom: "18px" }}
      />
      <TextField
        id="outlined-required"
        label="Retype Password*"
        type="password"
        autoComplete="current-password"
        variant="standard"
        fullWidth
        sx={{ marginBottom: "18px" }}
      />
      <StyledButtons>
        <Stack spacing={2}>
          <Button
            variant="contained"
            disableElevation
            sx={{ background: "#4285F4", marginTop: "27px" }}
          >
            SIGN UP
          </Button>
        </Stack>
      </StyledButtons>
      <StyledParagraph>
        <span id="text">
          <p>OR SIGN UP USING</p>
        </span>
      </StyledParagraph>
    </StyledForm>
  );
};

export default SignUpTextFields;
