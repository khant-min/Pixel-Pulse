import Protected from "./components/auth/Protected";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="auth" element={<Auth />} />

      <Route path="profile" element={<Profile />} />

      <Route element={<Protected />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default App;
