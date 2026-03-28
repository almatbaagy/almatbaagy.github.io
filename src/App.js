import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, SurveyPage, PresentationPage } from '@/pages';
function App() {
    return (_jsx(HashRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, {}) }), _jsx(Route, { path: "/login", element: _jsx("div", { className: "p-8", children: "Login" }) }), _jsx(Route, { path: "/register", element: _jsx("div", { className: "p-8", children: "Register" }) }), _jsx(Route, { path: "/s/:slug", element: _jsx(SurveyPage, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx("div", { className: "p-8", children: "Dashboard" }) }), _jsx(Route, { path: "/admin", element: _jsx("div", { className: "p-8", children: "Admin" }) }), _jsx(Route, { path: "/presentation", element: _jsx(PresentationPage, {}) })] }) }));
}
export default App;
