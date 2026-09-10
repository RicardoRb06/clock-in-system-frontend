import type { Category } from "./category";
import type { Role } from "./roles";

export interface AuthUser {
    _id: string;
    _name: string;
    _role: Role;
    _category: Category | null;
    _isWorking: boolean;
}
