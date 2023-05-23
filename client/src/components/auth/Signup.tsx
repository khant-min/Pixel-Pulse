import {
  FormControl,
  FormHelperText,
  Box,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { Input } from "@mui/joy";

export default function Signup() {
  return (
    <Stack>
      <FormControl required>
        <Input placeholder="Enter your username" variant="outlined" />
      </FormControl>

      <FormControl required>
        <Input placeholder="Enter your email" variant="outlined" />
      </FormControl>

      <FormControl required>
        <Input placeholder="Enter your password" variant="outlined" />
      </FormControl>

      <FormControl>
        <Input type="file" variant="outlined" />
      </FormControl>

      <FormControl>
        <Button type="submit">Register</Button>
      </FormControl>
    </Stack>
  );
}
