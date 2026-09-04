import { Routes, Route } from "react-router-dom";

import { PublicRoutes } from "./public.routes";
import { ProtectedRoutes } from "./protected.routes";

import { LoginPage } from "../../pages/Login.page";
import { RegisterPage } from "../../pages/Register.page";
import { RoleRoute } from "./role.routes";
import { TimeEntryPage } from "../../pages/TimeEntryPage";
import { RoleRedirect } from "./role.redirect";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<RoleRedirect />} />

        <Route element={<RoleRoute allowedRoles={["USER"]} />}>
          <Route path="/time-entry" element={<TimeEntryPage />} />
        </Route>
        <Route element={<RoleRoute allowedRoles={["ADMIN"]} />}>
        </Route>
        <Route element={<RoleRoute allowedRoles={["MODERATOR"]} />}>
        </Route>
        <Route element={<RoleRoute allowedRoles={["TIME_CLOCK"]} />}>
        </Route>
      </Route>
    </Routes>
  );
}
