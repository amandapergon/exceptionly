import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { StyledForm } from "../logInForm/styles";
import { StyledButtons } from "../loginButtons/styles";
import { RecoveryText } from "./styles";

const RecoveryForm = () => {
  return (
    <StyledForm>
      <TextField
        label="Email"
        type={"email"}
        variant="standard"
        fullWidth
        sx={{ marginBottom: "20px", marginTop: "24px" }}
      />
      <StyledButtons>
        <Stack spacing={2}>
          <Button
            variant="contained"
            disableElevation
            sx={{ background: "#4285F4", marginTop: "27px" }}
          >
            RECOVER PASSWORD
          </Button>
        </Stack>
      </StyledButtons>
      <RecoveryText>
        If the email provided matches an existent account, we will send you a
        link with recovery instructions.
      </RecoveryText>
    </StyledForm>
  );
};

export default RecoveryForm;