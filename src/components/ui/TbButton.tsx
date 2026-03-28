type Variant = 'primary' | 'secondary' | 'teal' | 'ghost';

const variantMap: Record<Variant, string> = {
    primary: 'bg-tb-sienna text-white border-3 border-tb-forest-ink shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-hover',
    secondary: 'bg-tb-sand text-tb-forest-ink border-3 border-tb-forest-ink shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-hover',
    teal: 'bg-tb-jade text-white border-3 border-tb-forest-ink shadow-neo hover:-translate-y-1 hover:-translate-x-1 hover:shadow-neo-hover',
    ghost: 'text-tb-forest-ink font-bold hover:bg-tb-sage-mist/30 border-3 border-transparent hover:border-tb-forest-ink hover:shadow-neo',
};

export const TbButton = ({
    children, variant = 'primary', className = '', ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) => (
    <button
        className={`inline-flex items-center justify-center gap-2 font-syne font-bold text-sm uppercase tracking-wider
                px-6 py-3 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-tb-sienna
                disabled:opacity-50 disabled:cursor-not-allowed
                ${variantMap[variant]} ${className}`}
        {...props}
    >
        {children}
    </button>
);
