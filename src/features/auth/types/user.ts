import type { Category } from "./category";

export type UserRole = "user" | "admin" | "moderator" | "time clock";

export interface AuthUser {
    name: string;
    role: UserRole;
    category: Category;
}
