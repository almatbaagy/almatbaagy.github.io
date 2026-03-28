import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { BirdMark } from '@/components/ui';
import { supabase } from '@/lib/supabase';
import { translations } from '@/lib/translations';
export const WaitlistSection = ({ language }) => {
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
    const handleSubmit = async (e) => {
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
        }
        catch (err) {
            setError('Connection error');
        }
        finally {
            setLoading(false);
        }
    };
    if (submitted) {
        return (_jsx("section", { className: "bg-tb-forest-ink py-32 px-6 border-b-4 border-tb-forest-ink", dir: isRTL ? 'rtl' : 'ltr', children: _jsxs("div", { className: "max-w-md mx-auto text-center bg-white border-4 border-tb-forest-ink shadow-[12px_12px_0px_0px_rgba(224,92,42,1)] p-12 rotate-1", children: [_jsx("div", { className: "inline-block bg-tb-jade border-4 border-tb-forest-ink p-4 -rotate-6 shadow-neo mb-6", children: _jsx(BirdMark, { className: "w-16 text-tb-forest-ink", animate: false }) }), _jsx("h1", { className: "font-syne font-black text-4xl text-tb-forest-ink uppercase", children: t.waitlist.successHeading }), _jsx("p", { className: "font-sans font-bold text-tb-forest-ink/70 text-base mt-4 uppercase tracking-widest", children: t.waitlist.successMessage })] }) }));
    }
    return (_jsxs("section", { className: "bg-tb-forest-ink py-32 px-6 border-b-4 border-tb-forest-ink overflow-hidden relative", dir: isRTL ? 'rtl' : 'ltr', children: [_jsx("div", { className: "absolute top-10 -left-20 w-40 h-40 bg-tb-jade border-4 border-tb-forest-ink shadow-neo -rotate-12 hidden md:block" }), _jsx("div", { className: "absolute bottom-10 -right-20 w-32 h-32 bg-tb-sienna rounded-full border-4 border-tb-forest-ink shadow-neo rotate-12 hidden md:block" }), _jsxs("div", { className: "relative z-10 max-w-lg mx-auto bg-white border-4 border-tb-forest-ink shadow-[16px_16px_0px_0px_rgba(240,120,64,1)] p-10 md:p-14 rotate-1 flex flex-col items-center", children: [_jsx("div", { className: "bg-tb-sand border-3 border-tb-forest-ink shadow-neo p-4 -translate-y-20 rotate-6 mb-[-3rem]", children: _jsx(BirdMark, { className: "w-16 text-tb-forest-ink", animate: false }) }), _jsx("h1", { className: "font-syne font-black text-5xl md:text-6xl text-tb-forest-ink text-center mt-2 uppercase tracking-tight", children: t.waitlist.heading }), _jsx("p", { className: "font-sans font-bold text-tb-forest-ink/70 text-center text-sm md:text-base mt-6 uppercase tracking-widest border-t-2 border-tb-forest-ink/10 pt-6", children: t.waitlist.subtitle }), _jsxs("form", { onSubmit: handleSubmit, className: "mt-10 space-y-5 w-full", children: [_jsx("input", { type: "text", placeholder: t.waitlist.namePlaceholder, value: formData.name, onChange: e => setFormData(prev => ({ ...prev, name: e.target.value })), required: true, className: "w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4\r\n                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase\r\n                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]\r\n                        transition-all" }), _jsx("input", { type: "email", placeholder: t.waitlist.emailPlaceholder, value: formData.email, onChange: e => setFormData(prev => ({ ...prev, email: e.target.value })), required: true, className: "w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4\r\n                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase\r\n                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]\r\n                        transition-all" }), _jsx("input", { type: "text", placeholder: t.waitlist.businessPlaceholder, value: formData.business, onChange: e => setFormData(prev => ({ ...prev, business: e.target.value })), className: "w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4\r\n                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase\r\n                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]\r\n                        transition-all" }), _jsx("input", { type: "tel", placeholder: t.waitlist.phonePlaceholder, value: formData.phone, onChange: e => setFormData(prev => ({ ...prev, phone: e.target.value })), className: "w-full bg-tb-sand border-3 border-tb-forest-ink px-5 py-4\r\n                        font-syne font-bold text-tb-forest-ink text-lg placeholder:text-tb-forest-ink/40 uppercase\r\n                        focus:outline-none focus:ring-4 focus:ring-tb-sienna shadow-[4px_4px_0_0_rgba(28,46,37,1)]\r\n                        transition-all" }), error && (_jsx("p", { className: "text-tb-sienna text-sm font-sans font-bold bg-tb-sienna/10 border-2 border-tb-sienna p-3", children: error })), _jsx("button", { type: "submit", disabled: loading, className: "w-full py-5 text-xl font-black mt-6 bg-tb-sienna text-white border-4 border-tb-forest-ink shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed", children: loading ? t.waitlist.submittingButton : t.waitlist.submitButton })] }), _jsx("p", { className: "font-mono text-tb-forest-ink/40 font-bold text-[10px] text-center mt-8 tracking-widest uppercase border-t-2 border-tb-forest-ink/10 pt-4 w-full", children: "Powered by TableBird \u00B7 A DDCX Product" })] })] }));
};
