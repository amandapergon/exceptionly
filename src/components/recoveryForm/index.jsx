import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Box, Button, Stack, TextField } from "@mui/material";
import { StyledForm } from "../logInForm/styles";
import { StyledButtons } from "../loginButtons/styles";
import { RecoveryText } from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid format")
      .required("This is a required field"),
  })
  .required();

const RecoveryForm = () => {
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
      <Box component="div" noValidate autoComplete="off">
        <StyledForm>
          <TextField
            id="email"
            label="Email"
            type="email"
            defaultValue=""
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
            variant="standard"
            fullWidth
            sx={{ marginBottom: "20px", marginTop: "24px" }}
          />
          <StyledButtons>
            <Stack spacing={2}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{ background: "#4285F4", marginTop: "27px" }}
              >
                RECOVER PASSWORD
              </Button>
            </Stack>
          </StyledButtons>
          <RecoveryText>
            If the email provided matches an existent account, we will send you
            a link with recovery instructions.
          </RecoveryText>
        </StyledForm>
      </Box>
    </form>
  );
};

export default RecoveryForm;
