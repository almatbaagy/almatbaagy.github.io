import { translations } from '@/lib/translations';

interface TestimonialsProps {
    language: 'ar' | 'en';
}

export const Testimonials = ({ language }: TestimonialsProps) => {
    const t = translations[language];
    const isRTL = language === 'ar';

    const testimonials = [
        { key: '1' },
        { key: '2' },
        { key: '3' },
    ];

    return (
        <section className="bg-tb-warm-linen py-32 px-6 border-b-4 border-tb-forest-ink" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-16 border-b-4 border-tb-forest-ink pb-8 flex-col md:flex-row gap-6">
                    <div>
                        <div className="inline-block bg-tb-sienna text-white font-mono font-bold tracking-widest uppercase text-xs border-3 border-tb-forest-ink px-3 py-1 shadow-neo -rotate-2 mb-6">
                            {t.testimonials.label}
                        </div>
                        <h2 className="font-syne font-black text-5xl md:text-7xl text-tb-forest-ink uppercase tracking-tight">{t.testimonials.heading}</h2>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => {
                        const bgColors = ['bg-white', 'bg-tb-sage-mist', 'bg-tb-sand'];
                        const rotations = ['rotate-1', '-rotate-2', 'rotate-2'];
                        return (
                        <div key={idx} className={`${bgColors[idx % bgColors.length]} border-4 border-tb-forest-ink shadow-[8px_8px_0px_0px_rgba(28,46,37,1)] p-8 ${rotations[idx % rotations.length]} hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 relative`}>
                            <div className="absolute -top-6 -left-4 bg-tb-forest-ink text-white w-12 h-12 flex items-center justify-center font-syne text-5xl rotate-12 border-3 border-tb-forest-ink">"</div>
                            
                            <div className="flex gap-1 mb-6 mt-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-tb-sienna text-xl">★</span>
                                ))}
                            </div>

                            <p className="font-sans font-bold text-tb-forest-ink text-lg leading-relaxed mt-4 italic">
                                "{(t.testimonials as any)[`testimonial${item.key}`]}"
                            </p>

                            <div className="w-full h-1 bg-tb-forest-ink my-6"></div>

                            <p className="font-syne font-black text-xl text-tb-forest-ink uppercase">{(t.testimonials as any)[`testimonial${item.key}Author`]}</p>
                            <p className="font-mono font-bold text-xs text-tb-forest-ink/60 tracking-widest uppercase mt-2">
                                {(t.testimonials as any)[`testimonial${item.key}Location`]}
                            </p>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    );
};
