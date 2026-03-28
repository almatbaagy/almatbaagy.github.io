import { useState } from 'react';
import {
    Navbar,
    Hero,
    HowItWorks,
    DashboardPreview,
    Features,
    Pricing,
    Testimonials,
    WaitlistSection,
    Footer,
} from '@/components/landing';

export const LandingPage = () => {
    const [language, setLanguage] = useState<'ar' | 'en'>('ar');
    const isRTL = language === 'ar';

    return (
        <div className="w-full" dir={isRTL ? 'rtl' : 'ltr'}>
            <Navbar language={language} onLanguageChange={setLanguage} />
            <Hero language={language} />
            <HowItWorks language={language} />
            <DashboardPreview language={language} />
            <Features language={language} />
            <Pricing language={language} />
            <Testimonials language={language} />
            <WaitlistSection language={language} />
            <Footer language={language} />
        </div>
    );
};
