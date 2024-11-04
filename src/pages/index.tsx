import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const HomePage = lazy(() => import('./home/HomePage'))


export const Routing: React.FC = () => {

    // TODO: Дописать выдавать возможность зайти только дальше по роутам только для авторизованных пользователей

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                </Routes>
            </Router>
        </Suspense>
    )
}