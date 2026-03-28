import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, SurveyPage, PresentationPage } from '@/pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<div className="p-8">Login</div>} />
                <Route path="/register" element={<div className="p-8">Register</div>} />
                <Route path="/s/:slug" element={<SurveyPage />} />
                <Route path="/dashboard" element={<div className="p-8">Dashboard</div>} />
                <Route path="/admin" element={<div className="p-8">Admin</div>} />
                <Route path="/presentation" element={<PresentationPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
