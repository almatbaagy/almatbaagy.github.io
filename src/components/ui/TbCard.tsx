export const TbCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white rounded-2xl border border-tb-sage-mist/30 shadow-sm ${className}`}>
        {children}
    </div>
);
