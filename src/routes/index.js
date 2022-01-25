import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import SignUp from "../pages/signup";
import PasswordRecovery from "../pages/passwordRecovery";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/passwordRecovery" element={<PasswordRecovery />} />
    </Routes>
  );
};

export default PageRoutes;
