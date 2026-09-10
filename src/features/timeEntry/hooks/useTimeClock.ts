import type { AuthUser } from "@/features/auth/types/user";

export function useTimeClock(users: AuthUser[]) {
  const openUsers = users.filter((user) => user._isWorking);
  const closedUsers = users.filter((user) => !user._isWorking);

  return {
    openUsers,
    closedUsers,
  };
}