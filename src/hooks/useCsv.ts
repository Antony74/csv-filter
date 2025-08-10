import parse from 'csv-simple-parser';
import { useState } from 'react';

export const useCsv = () => {
    const [headers, setHeaders] = useState<string[]>([]);
    const [content, setContent] = useState<string[][]>([]);

    return {
        loadFile: async (file: File) => {
            const reader = new FileReader();

            const output = await new Promise<string[][]>((resolve, reject) => {
                reader.onload = (e) => {
                    const content = e.target?.result;

                    if (typeof content !== 'string') {
                        return;
                    }

                    const output = parse(content.trim(), {
                        optimistic: false,
                    });

                    resolve(output as string[][]);
                };

                reader.onerror = reject;

                reader.readAsText(file);
            });

            setHeaders(output[0]);
            output.shift();

            for (let y = 0; y < output.length; ++y) {
                for (let x = 0; x < output[y].length; ++x) {
                    if (output[y][x] === undefined) {
                        output[y][x] = '';
                    }
                }
            }

            setContent(output);
        },
        headers,
        content,
    };
};

export type CsvHook = ReturnType<typeof useCsv>;
