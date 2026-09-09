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
import { UserLayout } from "@/components/layout/UserLayout";
import { HomePage } from "@/features/user/pages/HomePage";
import { HoursPage } from "@/features/user/pages/HoursPage";
import { TasksPage } from "@/features/user/pages/TasksPage";
import { TeamsPage } from "@/features/user/pages/TeamsPage";

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

        <Route element={<UserLayout />}>
          <Route element={<RoleRoute allowedRoles={["user", "admin", "moderator"]} />}>
            <Route path="/homePage" element={<HomePage />} />
            <Route path="/hours" element={<HoursPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/teams" element={<TeamsPage />} />
          </Route>
          <Route element={<RoleRoute allowedRoles={["admin"]} />}>
          </Route>
          <Route element={<RoleRoute allowedRoles={["moderator"]} />}>
          </Route>
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
