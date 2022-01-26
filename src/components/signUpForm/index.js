import { useState } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SignupButtons from "../signupButtons";
import { StyledButtons } from "../loginButtons/styles";
import { StyledForm } from "../logInForm/styles";
import { StyledParagraph } from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SignUpTextFields = ({ href }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <StyledForm>
        <TextField
          label="Name"
          type="name"
          variant="standard"
          fullWidth
          sx={{ marginBottom: "15px", marginTop: "24px" }}
        />
        <TextField
          label="Last Name"
          type="last name"
          variant="standard"
          fullWidth
          sx={{ marginBottom: "18px" }}
        />
        <TextField
          label="Email"
          type="email"
          variant="standard"
          fullWidth
          sx={{ marginBottom: "18px" }}
        />
        <TextField
          label="Retype Email"
          type="email"
          variant="standard"
          fullWidth
          sx={{ marginBottom: "18px" }}
        />
        <TextField
          id="outlined-required"
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          sx={{ marginBottom: "18px" }}
        />
        <TextField
          id="outlined-required"
          label="Retype Password"
          type="password"
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
        <SignupButtons />
      </StyledForm>
    </Box>
  );
};

export default SignUpTextFields;

// validate={[
//   {
//     regexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/,
//     placeholder: "exemplo@ex.com",
//     message: "E-mail inválido.",
//   },
//   (email) => {
//     if (email.length > 5) {
//       setEmailVal(true);
//     }
//     return undefined;
//   },
// ]}
