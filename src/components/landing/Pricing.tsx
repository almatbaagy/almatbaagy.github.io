import { translations } from '@/lib/translations';

interface PricingProps {
    language: 'ar' | 'en';
}

export const Pricing = ({ language }: PricingProps) => {
    const t = translations[language];
    const isRTL = language === 'ar';

    return (
        <section id="pricing" className="bg-tb-jade py-32 px-6 border-b-4 border-tb-forest-ink relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-tb-sienna rounded-full border-4 border-tb-forest-ink translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block shadow-neo"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section label */}
                <div className="flex justify-center mb-6">
                    <p className="font-mono font-bold bg-white text-tb-forest-ink text-xs tracking-widest uppercase text-center border-3 border-tb-forest-ink px-4 py-2 shadow-neo rotate-2">
                        {t.pricing.label}
                    </p>
                </div>

                {/* Heading */}
                <h2 className="font-syne font-black text-6xl md:text-7xl text-white text-center mt-3 uppercase tracking-tight" style={{ textShadow: '4px 4px 0px #1C2E25' }}>
                    {t.pricing.heading}
                </h2>

                {/* Sub */}
                <div className="mt-8 bg-tb-sand border-3 border-tb-forest-ink p-4 max-w-lg mx-auto shadow-neo -rotate-1">
                    <p className="font-sans font-bold text-tb-forest-ink text-center uppercase tracking-widest text-sm md:text-base">
                        {t.pricing.subtitle}
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic */}
                    <div className="bg-white border-4 border-tb-forest-ink shadow-[8px_8px_0px_0px_rgba(28,46,37,1)] p-8 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(28,46,37,1)] transition-transform duration-300 relative group rotate-1">
                        <p className="font-mono text-sm font-black text-tb-forest-ink tracking-widest uppercase border-b-2 border-tb-forest-ink pb-4">{t.pricing.basicTier}</p>

                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="font-syne font-black text-6xl text-tb-forest-ink">599</span>
                            <span className="font-sans font-bold text-tb-forest-ink/60 uppercase">{t.pricing.basicPriceUnit}</span>
                        </div>

                        <ul className="space-y-4 font-sans font-bold text-tb-forest-ink mt-8 mb-8">
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.basicFeature1}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.basicFeature2}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.basicFeature3}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.basicFeature4}</li>
                            <li className="flex items-start gap-2 opacity-50 line-through decoration-2"><span className="text-tb-forest-ink">✕</span> {t.pricing.basicFeature5}</li>
                            <li className="flex items-start gap-2 opacity-50 line-through decoration-2"><span className="text-tb-forest-ink">✕</span> {t.pricing.basicFeature6}</li>
                        </ul>

                        <button className="w-full bg-tb-sand text-tb-forest-ink font-syne font-black uppercase tracking-wider py-4 border-3 border-tb-forest-ink shadow-neo hover:bg-tb-sage-mist transition-colors">
                            {t.pricing.basicCTA}
                        </button>
                    </div>

                    {/* Pro - Highlighted */}
                    <div className="bg-tb-ember border-4 border-tb-forest-ink shadow-[12px_12px_0px_0px_rgba(28,46,37,1)] p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 relative group md:scale-105 z-10 -rotate-2">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-tb-forest-ink font-mono font-black text-xs px-4 py-1 border-3 border-tb-forest-ink shadow-neo rotate-2 uppercase tracking-widest">MOST POPULAR</div>
                        
                        <p className="font-mono text-sm font-black text-tb-forest-ink tracking-widest uppercase border-b-2 border-tb-forest-ink pb-4 mt-2">{t.pricing.proTier}</p>

                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="font-syne font-black text-6xl text-tb-forest-ink">999</span>
                            <span className="font-sans font-bold text-tb-forest-ink/70 uppercase">{t.pricing.proPriceUnit}</span>
                        </div>

                        <ul className="space-y-4 font-sans font-bold text-tb-forest-ink mt-8 mb-8">
                            <li className="flex items-start gap-2"><span className="text-white">✺</span> {t.pricing.proFeature1}</li>
                            <li className="flex items-start gap-2"><span className="text-white">✺</span> {t.pricing.proFeature2}</li>
                            <li className="flex items-start gap-2"><span className="text-white">✺</span> {t.pricing.proFeature3}</li>
                            <li className="flex items-start gap-2"><span className="text-white">✺</span> {t.pricing.proFeature4}</li>
                            <li className="flex items-start gap-2"><span className="text-white">✺</span> {t.pricing.proFeature5}</li>
                            <li className="flex items-start gap-2 opacity-50 line-through decoration-2"><span className="text-tb-forest-ink">✕</span> {t.pricing.proFeature6}</li>
                        </ul>

                        <button className="w-full bg-white text-tb-forest-ink font-syne font-black uppercase tracking-wider py-4 border-3 border-tb-forest-ink shadow-neo hover:bg-tb-sand transition-colors">
                            {t.pricing.proCTA}
                        </button>
                    </div>

                    {/* Consulting */}
                    <div className="bg-tb-sand border-4 border-tb-forest-ink shadow-[8px_8px_0px_0px_rgba(28,46,37,1)] p-8 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(28,46,37,1)] transition-transform duration-300 relative group rotate-1">
                        <p className="font-mono text-sm font-black text-tb-forest-ink tracking-widest uppercase border-b-2 border-tb-forest-ink pb-4">{t.pricing.consultingTier}</p>

                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="font-syne font-black text-5xl text-tb-forest-ink">2,500</span>
                            <span className="font-sans font-bold text-tb-forest-ink/60 uppercase">{t.pricing.consultingPriceUnit}</span>
                        </div>

                        <ul className="space-y-4 font-sans font-bold text-tb-forest-ink mt-8 mb-8">
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.consultingFeature1}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.consultingFeature2}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.consultingFeature3}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.consultingFeature4}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.consultingFeature5}</li>
                            <li className="flex items-start gap-2"><span className="text-tb-sienna">✺</span> {t.pricing.consultingFeature6}</li>
                        </ul>

                        <button className="w-full bg-tb-sienna text-white font-syne font-black uppercase tracking-wider py-4 border-3 border-tb-forest-ink shadow-[4px_4px_0px_0px_rgba(28,46,37,1)] hover:bg-tb-deep-forest transition-colors">
                            {t.pricing.consultingCTA}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
