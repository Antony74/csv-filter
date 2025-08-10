import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { useCsv } from './hooks/useCsv';
import { Csv } from './components/Csv';

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

const App = () => {
    const csv = useCsv();

    return (
        <div>
            <input
                aria-label="Load csv file"
                type="file"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = (event.target.files ?? [])[0];
                    if (!file) {
                        return;
                    }

                    csv.loadFile(file);
                }}
            ></input>
            <Csv csv={csv} />
        </div>
    );
};

createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
