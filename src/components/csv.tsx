import { CsvHook } from '../hooks/useCsv';

export const Csv = ({ csv }: { csv: CsvHook }) => {
    return (
        <div className="pad">
            <table>
                <thead>
                    <tr>
                        {csv.headers.map((header, index) => {
                            return <th key={index}>{header}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {csv.content.map((row, index) => {
                        return (
                            <tr key={index}>
                                {row.map((cell, index) => {
                                    return <td key={index}>{cell}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
