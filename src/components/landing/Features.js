import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { translations } from '@/lib/translations';
export const Features = ({ language }) => {
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
    return (_jsx("section", { id: "features", className: "bg-tb-warm-linen py-32 px-6 border-b-4 border-tb-forest-ink", dir: isRTL ? 'rtl' : 'ltr', children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("p", { className: "font-mono font-bold bg-tb-sand text-tb-forest-ink text-xs tracking-widest uppercase text-center border-3 border-tb-forest-ink px-4 py-2 shadow-neo -rotate-1", children: t.features.label }) }), _jsx("h2", { className: "font-syne font-black text-6xl md:text-7xl text-tb-forest-ink text-center mt-3 uppercase tracking-tight relative z-10", children: _jsx("span", { className: "bg-tb-sage-mist inline-block px-4 py-2 border-4 border-tb-forest-ink shadow-neo rotate-1", children: t.features.heading }) }), _jsx("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, idx) => {
                        const bgColors = ['bg-white', 'bg-tb-sand', 'bg-tb-sage-mist', 'bg-white', 'bg-tb-sand', 'bg-white'];
                        const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];
                        return (_jsxs("div", { className: `${bgColors[idx % bgColors.length]} border-4 border-tb-forest-ink p-8 shadow-neo hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(28,46,37,1)] transition-transform duration-300 ${rotations[idx % rotations.length] || ''}`, children: [_jsx("div", { className: "w-14 h-14 border-3 border-tb-forest-ink shadow-neo bg-tb-ember flex items-center justify-center text-3xl mb-6", children: feature.icon }), _jsx("h3", { className: "font-syne font-bold text-2xl text-tb-forest-ink mt-4 uppercase leading-tight line-clamp-2", children: t.features[feature.titleKey] }), _jsx("p", { className: "font-sans font-medium text-base text-tb-forest-ink/80 leading-relaxed mt-4 border-t-2 border-tb-forest-ink/20 pt-4", children: t.features[feature.descKey] })] }, idx));
                    }) })] }) }));
};
