import { api } from "../../../lib/axios.ts"

interface ClockInRequest {
    userId: string,
}

interface ClockOutRequest {
    userId: string,
}

export async function clockIn(data: ClockInRequest) {
    const response = await api.post("time-entry/clock-in", data);
    return response.data;
}

export async function clockOut(data: ClockOutRequest) {
    const response = await api.post("time-entry/clock-out", data);
    return response.data;
}

