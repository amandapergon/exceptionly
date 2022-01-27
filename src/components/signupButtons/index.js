import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { StyledSignupButtons } from "./styles";

export default function SignupButtons() {
  return (
    <StyledSignupButtons>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "##4285F4",
          }}
        >
          <i class="fab fa-google"></i>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "#2867B2",
          }}
        >
          <i class="fab fa-linkedin"></i>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "#F25022",
          }}
        >
          <i class="fab fa-microsoft"></i>
        </Button>
      </Stack>
    </StyledSignupButtons>
  );
}
