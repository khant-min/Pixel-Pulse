import { FormControl, FormHelperText, TextField, Box } from "@mui/material";
import { Input } from "@mui/joy";

export default function Login() {
  return (
    <div>
      <Box>
        <FormControl sx={{ width: "100%", gap: 3 }}>
          <Input placeholder="Enter your email" variant="outlined" />
          <Input
            placeholder="Enter your password"
            type="password"
            variant="outlined"
          />
        </FormControl>
      </Box>
    </div>
  );
}
