import { Wordmark, BirdMark, TbButton } from '@/components/ui';
import { useState } from 'react';
import { translations } from '@/lib/translations';

interface NavbarProps {
    language: 'ar' | 'en';
    onLanguageChange: (lang: 'ar' | 'en') => void;
}

export const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const t = translations[language];
    const isRTL = language === 'ar';

    return (
        <nav className="fixed top-0 left-0 right-0 bg-tb-sand border-b-4 border-tb-forest-ink shadow-[0_4px_0_0_rgba(28,46,37,1)] px-6 py-4 z-50" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Left: Logo + Wordmark */}
                <div className="flex items-center gap-3">
                    <BirdMark className="w-7 text-tb-forest-ink" />
                    <Wordmark variant="dark" size="md" />
                </div>

                {/* Center: Desktop Nav Links */}
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#how" className="font-syne text-sm font-bold text-tb-forest-ink/80 hover:text-tb-forest-ink hover:-translate-y-1 transition-transform uppercase tracking-wider">
                        {t.navbar.howItWorks}
                    </a>
                    <a href="#features" className="font-syne text-sm font-bold text-tb-forest-ink/80 hover:text-tb-forest-ink hover:-translate-y-1 transition-transform uppercase tracking-wider">
                        {t.navbar.features}
                    </a>
                    <a href="#pricing" className="font-syne text-sm font-bold text-tb-forest-ink/80 hover:text-tb-forest-ink hover:-translate-y-1 transition-transform uppercase tracking-wider">
                        {t.navbar.pricing}
                    </a>
                    <a href="#login" className="font-syne text-sm font-bold text-tb-forest-ink/80 hover:text-tb-forest-ink hover:-translate-y-1 transition-transform uppercase tracking-wider">
                        {t.navbar.login}
                    </a>

                    {/* Language toggle */}
                    <button
                        onClick={() => onLanguageChange(language === 'ar' ? 'en' : 'ar')}
                        className="bg-tb-ember hover:bg-tb-sienna text-tb-forest-ink font-syne font-bold text-xs tracking-widest px-3 py-1.5 border-2 border-tb-forest-ink shadow-neo hover:translate-x-[2px] transition-transform"
                    >
                        {language === 'ar' ? 'EN' : 'AR'}
                    </button>
                </div>

                {/* Right: CTA Button + Mobile Menu */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <TbButton variant="primary">{t.navbar.cta}</TbButton>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-tb-forest-ink p-2 border-2 border-tb-forest-ink bg-white shadow-neo"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-3 pb-4 border-t-2 border-tb-forest-ink pt-4">
                    <a href="#how" className="font-syne text-sm font-bold text-tb-forest-ink hover:text-tb-sienna py-2 uppercase tracking-wide">
                        {t.navbar.howItWorks}
                    </a>
                    <a href="#features" className="font-syne text-sm font-bold text-tb-forest-ink hover:text-tb-sienna py-2 uppercase tracking-wide">
                        {t.navbar.features}
                    </a>
                    <a href="#pricing" className="font-syne text-sm font-bold text-tb-forest-ink hover:text-tb-sienna py-2 uppercase tracking-wide">
                        {t.navbar.pricing}
                    </a>
                    <button
                        onClick={() => {
                            onLanguageChange(language === 'ar' ? 'en' : 'ar');
                            setMobileOpen(false);
                        }}
                        className="font-syne text-sm font-black text-white bg-tb-forest-ink py-2 uppercase tracking-wide border-2 border-tb-forest-ink w-full text-center"
                    >
                        {language === 'ar' ? 'English' : 'العربية'}
                    </button>
                    <TbButton variant="primary" className="w-full mt-2">{t.navbar.cta}</TbButton>
                </div>
            )}
        </nav>
    );
};
