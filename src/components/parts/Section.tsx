import type React from "react";

interface SectionProps {
    scheme?: "scheme-1" | "scheme-2" | "scheme-3" | "scheme-4",
    children: React.ReactNode;
}

export function Section ({scheme = "scheme-1", children}: SectionProps) {
    return (
        <div className={`${scheme} w-full py-10 px-6 md:px-16 lg:px-28`}>
            {children}
        </div>
    )
}