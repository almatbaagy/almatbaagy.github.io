import { translations } from '@/lib/translations';

interface FeaturesProps {
    language: 'ar' | 'en';
}

export const Features = ({ language }: FeaturesProps) => {
    const t = translations[language];
    const isRTL = language === 'ar';

    const features = [
        { icon: '📱', titleKey: 'feature1Title', descKey: 'feature1Desc' },
        { icon: '🔔', titleKey: 'feature2Title', descKey: 'feature2Desc' },
        { icon: '⭐', titleKey: 'feature3Title', descKey: 'feature3Desc' },
        { icon: '📊', titleKey: 'feature4Title', descKey: 'feature4Desc' },
        { icon: '🌐', titleKey: 'feature5Title', descKey: 'feature5Desc' },
        { icon: '👁️', titleKey: 'feature6Title', descKey: 'feature6Desc' },
    ];

    return (
        <section id="features" className="bg-tb-warm-linen py-32 px-6 border-b-4 border-tb-forest-ink" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto">
                {/* Section label */}
                <div className="flex justify-center mb-6">
                    <p className="font-mono font-bold bg-tb-sand text-tb-forest-ink text-xs tracking-widest uppercase text-center border-3 border-tb-forest-ink px-4 py-2 shadow-neo -rotate-1">
                        {t.features.label}
                    </p>
                </div>

                {/* Heading */}
                <h2 className="font-syne font-black text-6xl md:text-7xl text-tb-forest-ink text-center mt-3 uppercase tracking-tight relative z-10">
                    <span className="bg-tb-sage-mist inline-block px-4 py-2 border-4 border-tb-forest-ink shadow-neo rotate-1">{t.features.heading}</span>
                </h2>

                {/* Features grid */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => {
                        const bgColors = ['bg-white', 'bg-tb-sand', 'bg-tb-sage-mist', 'bg-white', 'bg-tb-sand', 'bg-white'];
                        const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];
                        return (
                        <div key={idx} className={`${bgColors[idx % bgColors.length]} border-4 border-tb-forest-ink p-8 shadow-neo hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(28,46,37,1)] transition-transform duration-300 ${rotations[idx % rotations.length] || ''}`}>
                            <div className="w-14 h-14 border-3 border-tb-forest-ink shadow-neo bg-tb-ember flex items-center justify-center text-3xl mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="font-syne font-bold text-2xl text-tb-forest-ink mt-4 uppercase leading-tight line-clamp-2">{(t.features as any)[feature.titleKey]}</h3>
                            <p className="font-sans font-medium text-base text-tb-forest-ink/80 leading-relaxed mt-4 border-t-2 border-tb-forest-ink/20 pt-4">
                                {(t.features as any)[feature.descKey]}
                            </p>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    );
};
