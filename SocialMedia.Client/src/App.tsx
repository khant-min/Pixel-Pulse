import Protected from "./components/auth/Protected";
import ProtectedAuth from "./components/auth/ProtectedAuth";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound";
import Unauthorized from "./components/Unauthorized";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />

      {/* <Route path="auth" element={<Auth />} /> */}

      {/* <Route element={<ProtectedAuth />}>
        <Route path="auth" element={<Auth />} />
      </Route>

      <Route path="profile" element={<Profile />} />

      <Route element={<Protected />}>
        <Route path="/" element={<Main />} />
      </Route>

      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
