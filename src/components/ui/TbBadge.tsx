const badgeMap = {
    positive: { cls: 'bg-tb-jade/10 text-tb-deep-forest border-tb-jade/15', label: 'Positive' },
    negative: { cls: 'bg-tb-sienna/10 text-tb-sienna border-tb-sienna/15', label: 'Needs Attention' },
    neutral: { cls: 'bg-tb-sage-mist/30 text-tb-forest-ink/50 border-tb-sage-mist/40', label: 'Neutral' },
};

export const TbBadge = ({ type }: { type: 'positive' | 'negative' | 'neutral' }) => {
    const { cls, label } = badgeMap[type];
    return (
        <span className={`inline-flex items-center font-mono text-[9px] font-medium tracking-[.18em]
                      uppercase px-2.5 py-1 rounded-full border ${cls}`}>
            {label}
        </span>
    );
};
