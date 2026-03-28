import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Navbar, Hero, HowItWorks, DashboardPreview, Features, Pricing, Testimonials, WaitlistSection, Footer, } from '@/components/landing';
export const LandingPage = () => {
    const [language, setLanguage] = useState('ar');
    const isRTL = language === 'ar';
    return (_jsxs("div", { className: "w-full", dir: isRTL ? 'rtl' : 'ltr', children: [_jsx(Navbar, { language: language, onLanguageChange: setLanguage }), _jsx(Hero, { language: language }), _jsx(HowItWorks, { language: language }), _jsx(DashboardPreview, { language: language }), _jsx(Features, { language: language }), _jsx(Pricing, { language: language }), _jsx(Testimonials, { language: language }), _jsx(WaitlistSection, { language: language }), _jsx(Footer, { language: language })] }));
};
