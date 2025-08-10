import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { useCsv } from './hooks/useCsv';
import { Csv } from './components/csv';
import { Filter } from './components/filter';
import { Save } from './components/save';

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

const App = () => {
    const csv = useCsv();

    const Controls = () =>
        csv.content.length ? (
            <>
                {' '}
                <Filter csv={csv} />
                <Save csv={csv} />
                <Csv csv={csv} />
            </>
        ) : (
            <></>
        );

    return (
        <div
            className="app"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                const file = event.dataTransfer.files[0];
                csv.loadFile(file);
            }}
        >
            <input
                className="pad"
                aria-label="Load csv file"
                type="file"
                accept=".csv"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = (event.target.files ?? [])[0];
                    csv.loadFile(file);
                }}
            ></input>
            <Controls />
        </div>
    );
};

createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
