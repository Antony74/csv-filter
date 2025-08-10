import { CsvHook } from '../hooks/useCsv';

export const Csv = ({ csv }: { csv: CsvHook }) => {
    return (
        <table>
            <thead>
                <tr>
                    {csv.headers.map((header, index) => {
                        return <td key={index}>{header}</td>;
                    })}
                </tr>
            </thead>
            <tbody>
                {csv.content.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
