import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

if (root === null) {
    throw new Error(`root element not found`);
}

createRoot(root).render(
    <React.StrictMode>
        <div>Hello world</div>
    </React.StrictMode>,
);
