import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Homepage from './components/Homepage';
// import ProtectedRoutes from './routing/ProtectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


