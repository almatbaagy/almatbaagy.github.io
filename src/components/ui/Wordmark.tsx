interface WordmarkProps {
    variant?: 'dark' | 'light';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const sizeMap = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl',
};

export const Wordmark = ({ variant = 'light', size = 'md' }: WordmarkProps) => {
    const tableColor = variant === 'dark' ? 'text-white' : 'text-tb-forest-ink';
    return (
        <span className={`font-syne font-black tracking-tighter uppercase leading-none ${sizeMap[size]}`}>
            <span className={tableColor}>TABLE</span>
            <span className="text-tb-sienna">BIRD</span>
        </span>
    );
};
