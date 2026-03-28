import React from 'react';

interface StarRatingProps {
    value: number;
    onChange?: (v: number) => void;
    readonly?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 'text-lg', md: 'text-2xl', lg: 'text-3xl' };

export const StarRating = ({ value, onChange, readonly = false, size = 'md' }: StarRatingProps) => {
    const [hovered, setHovered] = React.useState(0);

    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
                <button
                    key={i}
                    type="button"
                    disabled={readonly}
                    onClick={() => onChange?.(i)}
                    onMouseEnter={() => !readonly && setHovered(i)}
                    onMouseLeave={() => setHovered(0)}
                    className={`leading-none transition-all duration-150 select-none
                      ${!readonly ? 'hover:scale-110 cursor-pointer' : 'cursor-default'}
                      ${(hovered || value) >= i ? 'text-tb-ember scale-110' : 'text-tb-sage-mist'}
                      ${sizeMap[size]}`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};
