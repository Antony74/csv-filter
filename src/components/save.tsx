import { stringify } from 'csv-stringify';
import { CsvHook } from '../hooks/useCsv';

export const Save = ({ csv }: { csv: CsvHook }) => {
    const pieces = csv.filename.split('.');
    const head = pieces[0];
    pieces.shift();
    const filename = [head, `filtered-by-${csv.filter}`, ...pieces].join('.');

    return (
        <div className="pad">
            <button
                onClick={async () => {
                    const output = await new Promise<string>(
                        (resolve, reject) => {
                            stringify(
                                [csv.headers, ...csv.content],
                                (err, output) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(output);
                                    }
                                },
                            );
                        },
                    );

                    const blob = new Blob([output], { type: 'text/csv' });
                    const url = URL.createObjectURL(blob);

                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);

                    URL.revokeObjectURL(url);
                }}
            >
                Save
            </button>
        </div>
    );
};
