import type { Category } from "./category";
import type { Role } from "./roles";

export interface AuthUser {
    _id: string;
    name: string;
    role: Role;
    category: Category | null;
    _isWorking: boolean;
}
