import { BirdMark, TbButton } from '@/components/ui';
import { translations } from '@/lib/translations';

interface HeroProps {
    language: 'ar' | 'en';
}

export const Hero = ({ language }: HeroProps) => {
    const t = translations[language];
    const isRTL = language === 'ar';

    return (
        <section className="relative bg-tb-sand pt-40 pb-24 px-6 overflow-hidden border-b-4 border-tb-forest-ink" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Neobrutalist decor shapes */}
            <div className="absolute top-24 -right-10 w-48 h-48 bg-tb-sienna border-4 border-tb-forest-ink shadow-neo rotate-12 pointer-events-none hidden md:block"></div>
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-tb-jade rounded-full border-4 border-tb-forest-ink shadow-neo -rotate-12 pointer-events-none hidden md:block"></div>
            <div className="absolute top-40 left-10 w-24 h-24 bg-tb-ember border-4 border-tb-forest-ink shadow-neo rotate-45 pointer-events-none hidden md:block"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Top label floating badge */}
                <div className="flex justify-center mb-8">
                    <span className="font-mono text-xs font-bold tracking-[.3em] uppercase text-tb-forest-ink bg-tb-sage-mist border-3 border-tb-forest-ink px-4 py-2 inline-block -rotate-2 shadow-neo">
                        {t.hero.label}
                    </span>
                </div>

                {/* Main heading */}
                <h1 className="font-syne text-6xl md:text-[8rem] font-black text-tb-forest-ink leading-[0.85] text-center uppercase tracking-tighter">
                    {t.hero.heading1} <span className="text-tb-sienna inline-block bg-tb-warm-linen border-4 border-tb-forest-ink shadow-neo px-4 py-1 rotate-2 mt-4 md:mt-0 leading-tight">{t.hero.heading2}</span>
                </h1>

                {/* Sub-tagline */}
                <div className="mt-12 bg-tb-warm-linen border-y-4 border-tb-forest-ink py-4 px-6 max-w-3xl mx-auto -rotate-1 shadow-neo">
                    <p className="font-sans font-bold text-tb-forest-ink text-xl md:text-2xl text-center uppercase tracking-widest leading-snug">
                        {t.hero.subtagline}
                    </p>
                </div>

                {/* Body copy */}
                <p className="font-sans font-medium text-tb-forest-ink/80 text-lg md:text-xl text-center max-w-2xl mx-auto mt-12 leading-relaxed bg-white border-3 border-tb-forest-ink p-6 shadow-neo rotate-1">
                    {t.hero.body}
                </p>

                {/* CTA buttons */}
                <div className="flex gap-6 justify-center flex-wrap mt-14">
                    <div className="-rotate-2">
                        <TbButton variant="primary" className="text-lg px-10 py-5">
                            {t.hero.ctaPrimary}
                        </TbButton>
                    </div>
                    <div className="rotate-2">
                        <TbButton variant="secondary" className="text-lg px-10 py-5 bg-white">
                            {t.hero.ctaSecondary}
                        </TbButton>
                    </div>
                </div>

                {/* Stats row */}
                <div className="flex gap-16 justify-center flex-wrap mt-24 border-t-4 border-tb-forest-ink pt-16 relative">
                    <div className="text-center relative bg-tb-sage-mist border-3 border-tb-forest-ink shadow-neo p-8 -rotate-3 hover:rotate-0 transition-transform">
                        <p className="font-syne text-tb-forest-ink text-5xl font-black">{t.hero.stat1Value}</p>
                        <p className="font-mono text-tb-forest-ink font-bold text-sm tracking-widest mt-2 uppercase">{t.hero.stat1Label}</p>
                    </div>
                    <div className="text-center relative bg-white border-3 border-tb-forest-ink shadow-neo p-8 rotate-1 hover:-rotate-2 transition-transform">
                        <p className="font-syne text-tb-forest-ink text-5xl font-black">{t.hero.stat2Value}</p>
                        <p className="font-mono text-tb-forest-ink font-bold text-sm tracking-widest mt-2 uppercase">{t.hero.stat2Label}</p>
                    </div>
                    <div className="text-center relative bg-tb-ember/20 border-3 border-tb-forest-ink shadow-neo p-8 -rotate-2 hover:rotate-2 transition-transform">
                        <p className="font-syne text-tb-forest-ink text-5xl font-black">{t.hero.stat3Value}</p>
                        <p className="font-mono text-tb-forest-ink font-bold text-sm tracking-widest mt-2 uppercase">{t.hero.stat3Label}</p>
                    </div>
                </div>

                {/* Floating bird sticker */}
                <div className="mt-20 flex justify-center pb-8">
                    <div className="bg-white border-4 border-tb-forest-ink shadow-[8px_8px_0px_0px_rgba(28,46,37,1)] rounded-full p-8 rotate-12 inline-flex hover:rotate-45 transition-transform duration-500 cursor-pointer">
                        <BirdMark className="w-24 border-none text-tb-forest-ink" animate={false} />
                    </div>
                </div>
            </div>
        </section>
    );
};
