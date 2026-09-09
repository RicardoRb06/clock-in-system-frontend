import { Outlet } from "react-router-dom";
import { Header } from "../parts/header";

export function TimeEntryLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}