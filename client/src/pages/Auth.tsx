import { Tabs, Tab, Typography, Box, Container } from "@mui/material";
import { useState } from "react";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Auth() {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Box sx={{ bgcolor: "divider", width: "400px" }}>
          <Tabs value={value} onChange={handleChange} aria-label="auth tabs">
            <Tab label="Sign Up" {...a11yProps(0)} />
            <Tab label="Log In" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Signup />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Login />
        </TabPanel>
      </Box>
    </Container>
  );
}
