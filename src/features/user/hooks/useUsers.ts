import { useCallback, useEffect, useState } from "react";
import type { AuthUser } from "@/features/auth/types/user"
import { getUsers } from "@/features/user/api/UsersApi"

export function useUsers() {
  const [users, setUsers] = useState<AuthUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const users = await getUsers();
    
      setUsers(users.data);
    } catch {
      setError("Não foi possível carregar os usuários.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    isLoading,
    error,
    refetch: fetchUsers,
  };
}