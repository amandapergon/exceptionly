import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextField, Box, Checkbox } from "@mui/material";

import { StyledForm } from "./styles";
import LoginButtons from "../loginButtons";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid format")
      .required("This is a required field")
      .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}"),
    password: yup.string().required("This is a required field"),
  })
  .required();

const FormPropsTextFields = ({ href }) => {
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
        <Box component="div" noValidate autoComplete="off">
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
              marginTop: "24px",
              marginBottom: "18px",
            }}
          />

          <br />

          <TextField
            id="password"
            label="Password *"
            type="password"
            defaultValue=""
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
            variant="standard"
            fullWidth
            sx={{
              marginBottom: "18px",
              marginTop: "10px",
            }}
          />
          <span id="under-login-form-text">
            <Checkbox size="small" sx={{ padding: 0 }} />
            Remember Me
            <a href={href}>Forgot Password?</a>
          </span>
        </Box>
      </StyledForm>
      <LoginButtons />
    </form>
  );
};

export default FormPropsTextFields;
