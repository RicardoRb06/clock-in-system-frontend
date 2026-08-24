import { z } from "zod";

export const registerSchema = z.object({
    name: z.string()
        .trim()
        .min(1, "Nome é obrigatório"),
    password: z.string()
        .trim()
        .min(1, "Senha é obrigatória")
        .min(8, "Senha deve ter no mínimo 8 catacteres")
        .max(64, "Senha deve ter no máximo 64 caracteres"),
    passwordConfirm: z.string()
        .trim()
        .min(1, "Confirmação de senha é obrigatória"),
    category: z.string()
        .nullable()
})
.refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não são iguais",
    path: ["passwordConfirm"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;