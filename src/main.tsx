import { createRoot } from 'react-dom/client'
import {Routing} from "./pages";
import './shared/styles/global.scss'


createRoot(document.getElementById('root')!).render(
    <Routing />
)
