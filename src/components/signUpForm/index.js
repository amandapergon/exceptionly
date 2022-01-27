import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextField, Box, Button, Stack } from "@mui/material";

import SignupButtons from "../signupButtons";
import { StyledButtons } from "../loginButtons/styles";
import { StyledForm } from "../logInForm/styles";
import { StyledParagraph } from "./styles";

const schema = yup
  .object({
    name: yup.string().required("Please insert your name"),
    lastName: yup.string().required("Please insert your name"),
    email: yup
      .string()
      .email("Invalid format")
      .required("Please insert your email")
      .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}"),
    retypeEmail: yup
      .string()
      .email("Invalid format")
      .required("Please insert your email")
      .oneOf([yup.ref("email"), null], "Emails must match"),
    password: yup
      .string()
      .required("Please insert your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    retypePassword: yup
      .string()
      .required("Please insert your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const SignUpTextFields = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, evt) => {
    evt.preventDefault();
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <Box component="div" autoComplete="off">
          <TextField
            id="name"
            label="Name*"
            type="name"
            defaultValue=""
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name")}
            variant="standard"
            fullWidth
            sx={{ marginBottom: "15px", marginTop: "24px" }}
          />
          <TextField
            id="lastName"
            label="Last name*"
            type="name"
            defaultValue=""
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register("lastName")}
            variant="standard"
            fullWidth
            sx={{ marginBottom: "18px" }}
          />
          <TextField
            id="email"
            label="Email*"
            type="email"
            defaultValue=""
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
            variant="standard"
            fullWidth
            sx={{
              marginBottom: "18px",
            }}
          />
          <TextField
            id="retypeEmail"
            label="Retype Email*"
            type="retypeEmail"
            defaultValue=""
            error={!!errors.retypeEmail}
            helperText={errors.retypeEmail?.message}
            {...register("retypeEmail")}
            variant="standard"
            fullWidth
            sx={{
              marginBottom: "18px",
            }}
          />
          <TextField
            id="password"
            label="Password*"
            type="password"
            defaultValue=""
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
            variant="standard"
            fullWidth
            sx={{
              marginBottom: "18px",
            }}
          />
          <TextField
            id="retypePassword"
            label="Retype password*"
            type="password"
            defaultValue=""
            error={!!errors.retypePassword}
            helperText={errors.retypePassword?.message}
            {...register("retypePassword")}
            variant="standard"
            fullWidth
            sx={{
              marginBottom: "18px",
              marginTop: "10px",
            }}
          />
          <StyledButtons>
            <Stack spacing={2}>
              <Button
                type="submit"
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
        </Box>
      </StyledForm>
    </form>
  );
};

export default SignUpTextFields;
