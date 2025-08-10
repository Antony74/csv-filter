import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { useCsv } from './hooks/useCsv';
import { Csv } from './components/csv';
import { Filter } from './components/filter';

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

const App = () => {
    const csv = useCsv();

    return (
        <div>
            <input
                className="pad"
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
            <Filter csv={csv} />
            <Csv csv={csv} />
        </div>
    );
};

createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
