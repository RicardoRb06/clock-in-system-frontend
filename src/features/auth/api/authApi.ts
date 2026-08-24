import { api } from "../../../lib/axios.ts"

interface LoginRequest {
    name: string,
    password: string,
}

interface RegisterRequest {
    name: string,
    password: string,
    category: string | null,
}

export async function login(data: LoginRequest) {
    const response = await api.post("auth/login", data);
    return response.data;
}

export async function register(data: RegisterRequest) {
    const response = await api.post("auth/register", data);
    return response.data
}