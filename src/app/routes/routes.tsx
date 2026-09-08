import { Routes, Route } from "react-router-dom";

import { PublicRoutes } from "./public.routes";
import { ProtectedRoutes } from "./protected.routes";
import { RoleRoute } from "./role.routes";
import { RoleRedirect } from "./role.redirect";

import { LoginPage } from "@/features/auth/pages/Login.page";
import { RegisterPage } from "@/features/auth/pages/Register.page";
import { TimeEntryPage } from "@/features/timeEntry/pages/TimeEntryPage";
import { TimeEntryLayout } from "@/components/layout/TimeEntryLayout";
import { TestPage } from "@/pages/testPage";
import { TestLayout } from "@/components/layout/TestLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<TestLayout />}>
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<RoleRedirect />} />

        <Route element={<RoleRoute allowedRoles={["user"]} />}>
        </Route>
        <Route element={<RoleRoute allowedRoles={["admin"]} />}>
        </Route>
        <Route element={<RoleRoute allowedRoles={["moderator"]} />}>
        </Route>

        <Route element={<TimeEntryLayout />}>
          <Route element={<RoleRoute allowedRoles={["time clock"]} />}>
            <Route path="/time-entry" element={<TimeEntryPage />} />
          </Route>
        </Route>
        
      </Route>
    </Routes>
  );
}
