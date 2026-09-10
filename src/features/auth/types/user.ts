import type { Category } from "./category";
import type { Role } from "./roles";

export interface AuthUser {
    name: string;
    role: Role;
    category: Category | null;
    _isWorking: boolean;
}
