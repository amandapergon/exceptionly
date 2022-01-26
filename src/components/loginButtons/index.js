import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { StyledButtons } from "./styles";

export default function LoginButtons() {
  return (
    <StyledButtons>
      <Stack spacing={2}>
        <Button
          variant="contained"
          disableElevation
          sx={{ background: "#4285F4", marginTop: "27px" }}
        >
          SIGN IN
        </Button>
        <p>OR</p>
        <Button
          variant="contained"
          disableElevation
          sx={{ background: "##4285F4" }}
        >
          <span>SIGN IN WITH GOOGLE</span>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{ background: "#2867B2" }}
        >
          <span>SIGN IN WITH LINKEDIN</span>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{ background: "#F25022", marginBottom: "60px" }}
        >
          <span>SIGN IN WITH MICROSOFT</span>
        </Button>
      </Stack>
    </StyledButtons>
  );
}
