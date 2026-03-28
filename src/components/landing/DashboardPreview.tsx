import { BirdMark } from '@/components/ui';
import { translations } from '@/lib/translations';

interface DashboardPreviewProps {
    language: 'ar' | 'en';
}

export const DashboardPreview = ({ language }: DashboardPreviewProps) => {
    const t = translations[language];
    const isRTL = language === 'ar';

    return (
        <section className="bg-tb-sand py-32 px-6 border-b-4 border-tb-forest-ink" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="max-w-5xl mx-auto">
                {/* Section label */}
                <div className="flex justify-center mb-6">
                    <p className="font-mono font-bold bg-white text-tb-forest-ink text-xs tracking-widest uppercase text-center border-3 border-tb-forest-ink px-4 py-2 shadow-neo -rotate-1">
                        {t.dashboardPreview.label}
                    </p>
                </div>

                {/* Heading */}
                <h2 className="font-syne font-black text-5xl md:text-7xl text-tb-forest-ink text-center mt-3 uppercase tracking-tight">{t.dashboardPreview.heading}</h2>

                {/* Sub */}
                <p className="font-sans font-bold text-tb-forest-ink/70 text-center max-w-lg mx-auto mt-6 uppercase tracking-widest">
                    {t.dashboardPreview.subheading}
                </p>

                {/* Dashboard mockup */}
                <div className="mt-20">
                    <div className="bg-tb-warm-linen border-4 border-tb-forest-ink shadow-[16px_16px_0px_0px_rgba(28,46,37,1)] relative rotate-1">
                        {/* Live indicator */}
                        <div className="absolute -top-4 -right-4 z-10 flex items-center gap-2 bg-tb-sienna border-3 border-tb-forest-ink text-white font-mono font-bold text-xs tracking-widest px-4 py-2 shadow-neo rotate-3">
                            <span className="w-2 h-2 bg-white animate-pulse"></span>
                            {t.dashboardPreview.liveIndicator}
                        </div>

                        {/* Dashboard content */}
                        <div className="flex h-[32rem]">
                            {/* Sidebar */}
                            <div className="w-48 bg-tb-sage-mist border-r-4 border-tb-forest-ink p-6 flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
                                <div className="flex items-center gap-3 pb-6 border-b-4 border-tb-forest-ink">
                                    <BirdMark className="w-6 text-tb-forest-ink" animate={false} />
                                    <span className="font-syne font-black text-tb-forest-ink uppercase text-sm">Table Bird</span>
                                </div>

                                <nav className="flex flex-col gap-3 mt-6 flex-1">
                                    <div className="text-white font-sans font-bold uppercase tracking-wider text-xs px-4 py-3 bg-tb-forest-ink border-2 border-tb-forest-ink shadow-[4px_4px_0px_0px_rgba(224,92,42,1)]">
                                        ● Dashboard
                                    </div>
                                    <div className="text-tb-forest-ink font-sans font-bold uppercase tracking-wider text-xs px-4 py-3 hover:bg-white border-2 border-transparent hover:border-tb-forest-ink transition-all cursor-pointer">
                                        Analytics
                                    </div>
                                    <div className="text-tb-forest-ink font-sans font-bold uppercase tracking-wider text-xs px-4 py-3 hover:bg-white border-2 border-transparent hover:border-tb-forest-ink transition-all cursor-pointer">
                                        Settings
                                    </div>
                                    <div className="text-tb-forest-ink font-sans font-bold uppercase tracking-wider text-xs px-4 py-3 hover:bg-white border-2 border-transparent hover:border-tb-forest-ink transition-all cursor-pointer">
                                        QR Code
                                    </div>
                                </nav>
                            </div>

                            {/* Main content */}
                            <div className="flex-1 p-8 overflow-y-auto bg-white">
                                {/* KPI cards */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-tb-sand border-3 border-tb-forest-ink shadow-neo p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(28,46,37,1)] transition-transform">
                                        <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-tb-forest-ink/60">{t.dashboardPreview.dashboardItemReviews}</p>
                                        <p className="font-syne font-black text-4xl text-tb-forest-ink mt-2">84</p>
                                    </div>
                                    <div className="bg-tb-sage-mist border-3 border-tb-forest-ink shadow-neo p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(28,46,37,1)] transition-transform">
                                        <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-tb-forest-ink/60">{t.dashboardPreview.dashboardItemAvgRating}</p>
                                        <p className="font-syne font-black text-4xl text-tb-sienna mt-2">4.3★</p>
                                    </div>
                                    <div className="bg-tb-ember/20 border-3 border-tb-forest-ink shadow-neo p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(28,46,37,1)] transition-transform">
                                        <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-tb-forest-ink/60">{t.dashboardPreview.dashboardItemResponseRate}</p>
                                        <p className="font-syne font-black text-4xl text-tb-jade mt-2">91%</p>
                                    </div>
                                    <div className="bg-tb-sand border-3 border-tb-forest-ink shadow-neo p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(28,46,37,1)] transition-transform">
                                        <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-tb-forest-ink/60">{t.dashboardPreview.dashboardItemThisWeek}</p>
                                        <p className="font-syne font-black text-4xl text-tb-ember mt-2">+12</p>
                                    </div>
                                </div>

                                {/* Chart placeholder */}
                                <div className="bg-white border-3 border-tb-forest-ink shadow-neo p-6 mb-8 h-32 flex items-end justify-around relative">
                                    <div className="absolute top-4 left-4 font-mono text-xs font-bold text-tb-forest-ink uppercase border-b-2 border-tb-forest-ink pb-1">Activity</div>
                                    {[3.2, 3.8, 3.5, 4.1, 4.0, 3.9, 4.3].map((val, i) => (
                                        <div
                                            key={i}
                                            className="bg-tb-sienna border-2 border-tb-forest-ink transition-transform hover:-translate-y-2"
                                            style={{ height: `${(val / 5) * 100}%`, width: '24px' }}
                                        ></div>
                                    ))}
                                </div>

                                {/* Recent responses */}
                                <div className="space-y-4">
                                    <p className="font-mono text-xs font-bold text-tb-forest-ink uppercase mb-2">Recent Responses</p>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="bg-tb-sand border-2 border-tb-forest-ink shadow-[2px_2px_0_0_rgba(28,46,37,1)] p-4 flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex gap-2">
                                                    {[1, 2, 3, 4, 5].map(s => (
                                                        <span key={s} className={s <= (i === 1 ? 3 : i === 2 ? 5 : 4) ? 'text-tb-sienna text-lg' : 'text-tb-forest-ink/20 text-lg'}>
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className={`font-mono font-bold text-[10px] tracking-widest uppercase px-3 py-1 border-2 border-tb-forest-ink shadow-[2px_2px_0_0_rgba(28,46,37,1)] ${i === 1 ? 'bg-tb-ember text-tb-forest-ink' : 'bg-tb-jade text-white'
                                                }`}>
                                                {i === 1 ? 'Needs Attention' : 'Excellent'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
