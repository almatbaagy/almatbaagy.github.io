import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const sizeMap = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl',
};
export const Wordmark = ({ variant = 'light', size = 'md' }) => {
    const tableColor = variant === 'dark' ? 'text-white' : 'text-tb-forest-ink';
    return (_jsxs("span", { className: `font-syne font-black tracking-tighter uppercase leading-none ${sizeMap[size]}`, children: [_jsx("span", { className: tableColor, children: "TABLE" }), _jsx("span", { className: "text-tb-sienna", children: "BIRD" })] }));
};
