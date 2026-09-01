export const rolesOptions = [
    { value: "USER", label: "usuário"},
    { value: "ADMIN", label: "administrador"},
    { value: "MODERATOR", label: "moderador"},
    { value: "TIME_CLOCK", label: "terminal de ponto"},
] as const;

export type Role = typeof rolesOptions[number]["value"];