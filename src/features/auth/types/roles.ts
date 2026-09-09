export const rolesOptions = [
    { value: "user", label: "usuário"},
    { value: "admin", label: "administrador"},
    { value: "moderator", label: "moderador"},
    { value: "time clock", label: "terminal de ponto"},
] as const;

export type Role = typeof rolesOptions[number]["value"];