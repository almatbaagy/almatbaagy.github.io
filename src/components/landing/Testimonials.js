import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { translations } from '@/lib/translations';
export const Testimonials = ({ language }) => {
    const t = translations[language];
    const isRTL = language === 'ar';
    const testimonials = [
        { key: '1' },
        { key: '2' },
        { key: '3' },
    ];
    return (_jsx("section", { className: "bg-tb-warm-linen py-32 px-6 border-b-4 border-tb-forest-ink", dir: isRTL ? 'rtl' : 'ltr', children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("div", { className: "flex justify-between items-end mb-16 border-b-4 border-tb-forest-ink pb-8 flex-col md:flex-row gap-6", children: _jsxs("div", { children: [_jsx("div", { className: "inline-block bg-tb-sienna text-white font-mono font-bold tracking-widest uppercase text-xs border-3 border-tb-forest-ink px-3 py-1 shadow-neo -rotate-2 mb-6", children: t.testimonials.label }), _jsx("h2", { className: "font-syne font-black text-5xl md:text-7xl text-tb-forest-ink uppercase tracking-tight", children: t.testimonials.heading })] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((item, idx) => {
                        const bgColors = ['bg-white', 'bg-tb-sage-mist', 'bg-tb-sand'];
                        const rotations = ['rotate-1', '-rotate-2', 'rotate-2'];
                        return (_jsxs("div", { className: `${bgColors[idx % bgColors.length]} border-4 border-tb-forest-ink shadow-[8px_8px_0px_0px_rgba(28,46,37,1)] p-8 ${rotations[idx % rotations.length]} hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 relative`, children: [_jsx("div", { className: "absolute -top-6 -left-4 bg-tb-forest-ink text-white w-12 h-12 flex items-center justify-center font-syne text-5xl rotate-12 border-3 border-tb-forest-ink", children: "\"" }), _jsx("div", { className: "flex gap-1 mb-6 mt-4", children: [1, 2, 3, 4, 5].map((star) => (_jsx("span", { className: "text-tb-sienna text-xl", children: "\u2605" }, star))) }), _jsxs("p", { className: "font-sans font-bold text-tb-forest-ink text-lg leading-relaxed mt-4 italic", children: ["\"", t.testimonials[`testimonial${item.key}`], "\""] }), _jsx("div", { className: "w-full h-1 bg-tb-forest-ink my-6" }), _jsx("p", { className: "font-syne font-black text-xl text-tb-forest-ink uppercase", children: t.testimonials[`testimonial${item.key}Author`] }), _jsx("p", { className: "font-mono font-bold text-xs text-tb-forest-ink/60 tracking-widest uppercase mt-2", children: t.testimonials[`testimonial${item.key}Location`] })] }, idx));
                    }) })] }) }));
};
