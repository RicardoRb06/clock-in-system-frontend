import { api } from "../../../lib/axios.ts"

interface LoginRequest {
    name: string,
    password: string,
}

export async function login(data: LoginRequest) {
    const response = await api.post("auth/login", data);
    return response.data;
}