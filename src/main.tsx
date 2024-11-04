import { createRoot } from 'react-dom/client'
import {Routing} from "./pages";
import React from 'react';


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
)
