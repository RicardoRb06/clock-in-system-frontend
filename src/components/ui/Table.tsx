import type { ReactNode } from "react";

export interface Column<T> {
    key: string;
    label: string;
    render: (item: T) => ReactNode;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
}

export function Table<T>({columns, data}: TableProps<T>) {
    return (
        <div className="overflow-x-auto rounded-md">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-scheme-border bg-scheme-bg-secondary">
                        {columns.map((col) => (
                            <th key={col.key} className="px-4 py-3 text-left text-sm font-semibold">
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-scheme-border last:border-b-0">
                            {columns.map((col) => (
                                <td key={col.key} className="px-4 py-3 text-sm">
                                    {col.render(item)}
                                </td>
                            ))}
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}