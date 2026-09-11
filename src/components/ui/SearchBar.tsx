import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
}

export default function SearchBar({
    placeholder = 'Buscar...',
    onSearch = () => {},
}: SearchBarProps) {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        setValue(newValue);
        onSearch(newValue);
    };

    const handleClear = () => {
        setValue('');
        onSearch('');
    };

    return (
        <div className="max-x-md">
            <div className="relative flex items-center">
                <Search className="pointer-events-none absolute left-3 h-4 w-4 text-scheme-accent" strokeWidth={2} />
                <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full rounded-lg border border-scheme-border bg-white py-2.5 pl-10 pr-9 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-slate-200"
                    />

                    {value && (
                        <button
                            type="button"
                            onClick={handleClear}
                            aria-label="Limpar busca"
                            className="absolute right-3 text-text-scheme-accent transition-colors hover:text-slate-600"
                        >
                            <X
                                className="h-4 w-4"
                                strokeWidth={2}
                            />
                        </button>
                    )}
            </div>
        </div>
    )
}