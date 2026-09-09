interface Column<T> {
    key: keyof T;
    label: string;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
}

export function Table<T extends {id?: string | number}>({columns, data}: TableProps<T>) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={String(col.key)}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td>nenhum dado disponível</td>
                        </tr>
                    ) : (
                        data.map((row, i) => (
                            <tr key={row.id ?? i}>
                                {columns.map((col) => (
                                    <td key={String(col.key)}>
                                        {String(row[col.key] ?? "")}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}