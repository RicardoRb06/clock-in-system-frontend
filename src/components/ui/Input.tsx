import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    inputSize?: 'sm' | 'md' | 'lg';
}

export function Input({
    label,
    error,
    inputSize = 'md',
    className = '',
    id,
    ...props
}: InputProps) {

    const baseStyles = "w-full rounded-md border px-3 py-2 text-base text-gray-900 bg-white placeholder-gray-400 focus:outline-none";

    const stateStyles = error
    ? "border-red-500 focus:border-red-600"
    : "border-gray-300 focus:border-primary";

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
    };

    return (
        <div className="flex w-full flex-col gap-1.5">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            {error && <span className="text-sm text-red-500">{error}</span>}
            <input
                className={`${baseStyles} ${stateStyles} ${sizes[inputSize]} ${className}`}
                {...props}
            />
        </div>
  );
}