import { useState } from 'react';
import { BirdMark } from '@/components/ui';
import { supabase } from '@/lib/supabase';
import { translations } from '@/lib/translations';

interface WaitlistSectionProps {
    language: 'ar' | 'en';
}

export const WaitlistSection = ({ language }: WaitlistSectionProps) => {
    const t = translations[language];
    const isRTL = language === 'ar';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        business: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { error: err } = await supabase
                .from('waitlist')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        business: formData.business,
                    },
                ]);

            if (err) {
                setError(err.message || 'An error occurred');
                return;
            }

            setSubmitted(true);
            setFormData({ name: '', email: '', business: '', phone: '' });

            // Reset after 4 seconds
            setTimeout(() => setSubmitted(false), 4000);
        } catch (err) {
            setError('Connection error');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <section className="bg-tb-forest-ink py-32 px-6 border-b-4 border-tb-forest-ink" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="max-w-md mx-auto text-center bg-white border-4 border-tb-forest-ink shadow-[12px_12px_0px_0px_rgba(224,92,42,1)] p-12 rotate-1">
                    <div className="inline-block bg-tb-jade border-4 border-tb-forest-ink p-4 -rotate-6 shadow-neo mb-6">
                        <BirdMark className="w-16 text-tb-forest-ink" animate={false} />
                    </div>
                    <h1 className="font-syne font-black text-4xl text-tb-forest-ink uppercase">{t.waitlist.successHeading}</h1>
                    <p className="font-sans font-bold text-tb-forest-ink/70 text-base mt-4 uppercase tracking-widest">
                        {t.waitlist.successMessage}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-tb-forest-ink py-32 px-6 border-b-4 border-tb-forest-ink overflow-hidden relative" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="absolute top-10 -left-20 w-40 h-40 bg-tb-jade border-4 border-tb-forest-ink shadow-neo -rotate-12 hidden md:block"></div>
            <div className="absolute bottom-10 -right-20 w-32 h-32 bg-tb-sienna rounded-full border-4 border-tb-forest-ink shadow-neo rotate-12 hidden md:block"></div>

            <div className="relative z-10 max-w-lg mx-auto bg-white border-4 border-tb-forest-ink shadow-[16px_16px_0px_0px_rgba(240,120,64,1)] p-10 md:p-14 rotate-1 flex flex-col items-center">
                <div className="bg-tb-sand border-3 border-tb-forest-ink shadow-neo p-4 -translate-y-20 rotate-6 mb-[-3rem]">
                    <BirdMark className="w-16 text-tb-forest-ink" animate={false} />
                </div>

                <h1 className="font-syne font-black text-5xl md:text-6xl text-tb-forest-ink text-center mt-2 uppercase tracking-tight">{t.waitlist.heading}</h1>

                <p className="font-sans font-bold text-tb-forest-ink/70 text-center text-sm md:text-base mt-6 uppercase tracking-widest border-t-2 border-tb-forest-ink/10 pt-6">
                    {t.waitlist.subtitle}
                </p>

                <form onSubmit={handleSubmit} className="mt-10 space-y-5 w-full">
                    <input
                        type="text"
                        placeholder={t.waitlist.namePlaceholder}
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4
                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase
                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]
                        transition-all"
                    />

                    <input
                        type="email"
                        placeholder={t.waitlist.emailPlaceholder}
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4
                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase
                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]
                        transition-all"
                    />

                    <input
                        type="text"
                        placeholder={t.waitlist.businessPlaceholder}
                        value={formData.business}
                        onChange={e => setFormData(prev => ({ ...prev, business: e.target.value }))}
                        className="w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4
                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase
                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]
                        transition-all"
                    />

                    <input
                        type="tel"
                        placeholder={t.waitlist.phonePlaceholder}
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4
                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase
                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]
                        transition-all"
                    />

                    {error && (
                        <p className="text-tb-sienna text-sm font-sans font-bold bg-tb-sienna/10 border-2 border-tb-sienna p-3">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-5 text-xl font-black mt-6 bg-tb-sienna text-white border-4 border-tb-forest-ink shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? t.waitlist.submittingButton : t.waitlist.submitButton}
                    </button>
                </form>

                <p className="font-mono text-tb-forest-ink/40 font-bold text-[10px] text-center mt-8 tracking-widest uppercase border-t-2 border-tb-forest-ink/10 pt-4 w-full">
                    Powered by TableBird · A DDCX Product
                </p>
            </div>
        </section>
    );
};
