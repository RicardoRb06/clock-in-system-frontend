import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../../features/auth/pages/Login.page";
import { RegisterPage } from "../../features/auth/pages/Register.page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
