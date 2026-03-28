import { BirdMark, Wordmark } from '@/components/ui';
import { translations } from '@/lib/translations';

interface FooterProps {
    language: 'ar' | 'en';
}

export const Footer = ({ language }: FooterProps) => {
    const t = translations[language];
    const isRTL = language === 'ar';

    return (
        <footer className="bg-tb-sand border-t-4 border-tb-forest-ink px-6 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="max-w-6xl mx-auto">
                <div className={`flex flex-col md:flex-row justify-between gap-16 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                    {/* Column 1: Brand */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3">
                            <div className="bg-tb-ember border-3 border-tb-forest-ink shadow-neo p-2 rotate-6">
                                <BirdMark className="w-10 text-tb-forest-ink" />
                            </div>
                            <Wordmark variant="light" size="xl" />
                        </div>
                        <p className="font-sans font-bold text-tb-forest-ink/80 text-lg md:text-xl mt-8 max-w-sm uppercase tracking-wider leading-relaxed border-l-4 border-tb-forest-ink pl-4">
                            {t.footer.missionStatement}
                        </p>
                        <p className="font-mono font-black text-tb-forest-ink text-xs mt-12 uppercase tracking-widest border-2 border-tb-forest-ink inline-block px-3 py-1 shadow-neo -rotate-2 bg-white">
                            {t.footer.copyright}
                        </p>
                    </div>

                    {/* Column 2: Product Links */}
                    <div>
                        <p className="font-mono text-tb-forest-ink text-sm font-black tracking-widest uppercase mb-6 border-b-4 border-tb-forest-ink pb-2 inline-block">
                            {t.footer.productLabel}
                        </p>
                        <ul className="space-y-4 font-syne font-bold text-xl text-tb-forest-ink uppercase">
                            <li>
                                <a href="#how" className="hover:text-tb-sienna hover:underline decoration-4 transition inline-block hover:translate-x-2">
                                    {t.footer.howItWorks}
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:text-tb-sienna hover:underline decoration-4 transition inline-block hover:translate-x-2">
                                    {t.footer.features}
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="hover:text-tb-sienna hover:underline decoration-4 transition inline-block hover:translate-x-2">
                                    {t.footer.pricing}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-tb-sienna hover:underline decoration-4 transition inline-block hover:translate-x-2">
                                    {t.footer.requestDemo}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <p className="font-mono text-tb-forest-ink text-sm font-black tracking-widest uppercase mb-6 border-b-4 border-tb-forest-ink pb-2 inline-block">
                            {t.footer.contactLabel}
                        </p>
                        <div className="space-y-4 font-syne font-bold text-xl text-tb-forest-ink uppercase flex flex-col items-start">
                            <p className="bg-white border-2 border-tb-forest-ink px-4 py-2 shadow-neo -rotate-1 hover:rotate-1 transition-transform cursor-pointer hover:bg-tb-jade hover:text-white">tablebird.io</p>
                            <p className="bg-white border-2 border-tb-forest-ink px-4 py-2 shadow-neo rotate-1 hover:-rotate-1 transition-transform cursor-pointer hover:bg-tb-sienna hover:text-white">hello@tablebird.io</p>
                            <p className="mt-4">
                                <a href="https://wa.me/201001234567" className="hover:text-tb-sienna hover:underline decoration-4 transition flex items-center gap-2">
                                    <span>→</span> {t.footer.whatsapp}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
