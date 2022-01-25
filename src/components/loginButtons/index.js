import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { StyledButtons } from "./styles";

export default function LoginButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" disableElevation>
        SIGN IN
      </Button>
      <p>OR</p>
      <Button variant="contained" disableElevation>
        SIGN IN WITH GOOGLE
      </Button>
      <Button variant="contained" disableElevation>
        SIGN IN WITH LINKEDIN
      </Button>
      <Button variant="contained" disableElevation>
        SIGN IN WITH MICROSOFT
      </Button>
    </Stack>
  );
}
