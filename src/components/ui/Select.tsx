import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    label?: string;
    error?: string;
    inputSize?: "sm" | "md" | "lg";
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export function Select({
    label,
    error,
    inputSize = "md",
    options,
    value,
    onChange,
    placeholder = "Selecione uma opção",
    disabled = false,
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(
        (option) => option.value === value
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
    };

    const stateStyles = error
        ? "border-red-500 focus-within:border-red-600"
        : "border-gray-300";

    function handleSelect(option: SelectOption) {
        onChange?.(option.value);
        setIsOpen(false);
    }

    return (
        <div
            ref={selectRef}
            className="flex w-full flex-col gap-1.5"
        >
            {label && (
                <label className="text-base font-normal text-gray-600">
                    {label}
                </label>
            )}

            <div className="relative">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setIsOpen((previous) => !previous)}
                    className={`
                        ${sizes[inputSize]}
                        ${stateStyles}
                        w-full rounded-md border
                        bg-white
                        text-left
                        outline-none
                        transition
                        flex items-center justify-between
                        ${
                            disabled
                                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                                : "cursor-pointer text-gray-900 hover:border-gray-400"
                        }
                        ${
                            isOpen && !disabled
                                ? "border-primary"
                                : ""
                        }
                    `}
                >
                    <span
                        className={
                            selectedOption
                                ? "text-gray-900"
                                : "text-gray-400"
                        }
                    >
                        {selectedOption?.label ?? placeholder}
                    </span>

                    <ChevronDown
                        size={18}
                        className={`
                            text-gray-500
                            transition-transform
                            ${isOpen ? "rotate-180" : ""}
                        `}
                    />
                </button>

                {isOpen && !disabled && (
                    <div
                        className="
                            absolute z-50 mt-1 w-full
                            overflow-hidden rounded-md
                            border border-gray-200
                            bg-white
                            shadow-lg
                        "
                    >
                        <ul className="max-h-60 overflow-auto py-1">
                            {options.map((option) => {
                                const isSelected =
                                    option.value === value;

                                return (
                                    <li key={option.value}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleSelect(option)
                                            }
                                            className={`
                                                w-full px-3 py-2
                                                text-left text-sm
                                                transition
                                                ${
                                                    isSelected
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-gray-900 hover:bg-gray-100"
                                                }
                                            `}
                                        >
                                            {option.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>

            {error && (
                <span className="text-sm text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
}