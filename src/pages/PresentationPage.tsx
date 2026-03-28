import { useState, useEffect } from 'react';
import { BirdMark, Wordmark, TbButton } from '@/components/ui';

const slides = [
    {
        id: 'title',
        content: (
            <div className="flex flex-col items-center justify-center min-h-full text-center relative px-4 py-12 md:px-6">
                <div className="absolute top-4 right-4 w-16 h-16 md:top-10 md:right-10 md:w-32 md:h-32 bg-tb-sienna border-2 md:border-4 border-tb-forest-ink shadow-neo rotate-12 pointer-events-none"></div>
                <div className="absolute bottom-10 left-4 w-12 h-12 md:bottom-20 md:left-10 md:w-24 md:h-24 bg-tb-jade rounded-full border-2 md:border-4 border-tb-forest-ink shadow-neo -rotate-12 pointer-events-none"></div>
                
                <BirdMark className="w-20 md:w-32 mb-6 md:mb-8 text-tb-forest-ink" animate={true} />
                
                <div className="bg-tb-warm-linen border-3 md:border-4 border-tb-forest-ink shadow-neo px-6 py-4 md:px-8 md:py-6 -rotate-2 mb-6">
                    <div className="md:hidden">
                        <Wordmark size="xl" variant="light" />
                    </div>
                    <div className="hidden md:block">
                        <Wordmark size="2xl" variant="light" />
                    </div>
                </div>
                
                <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-black text-tb-forest-ink uppercase tracking-tighter mt-4 rotate-1 max-w-[90vw]">
                    Every Table <span className="text-tb-sienna">Has a Story</span>
                </h1>
                
                <p className="font-sans font-bold text-lg md:text-2xl mt-8 bg-white border-3 border-tb-forest-ink shadow-neo px-4 py-2 md:px-6 md:py-3 -rotate-1 max-w-[85vw]">
                    The Smart Feedback Platform for Egyptian Restaurants
                </p>
                
                <div className="mt-12 font-mono text-[10px] md:text-sm tracking-widest text-tb-forest-ink/80 uppercase font-bold hidden sm:block">
                    Use arrow keys to navigate
                </div>
            </div>
        )
    },
    {
        id: 'problem',
        content: (
            <div className="flex flex-col justify-center min-h-full max-w-5xl mx-auto px-4 py-12 md:px-6">
                <div className="inline-block bg-tb-sienna text-white border-3 border-tb-forest-ink px-3 py-1 font-mono font-bold text-sm md:text-lg mb-4 md:mb-6 shadow-neo -rotate-2 self-start uppercase">
                    The Problem
                </div>
                <h2 className="font-syne text-3xl sm:text-5xl md:text-7xl font-black text-tb-forest-ink uppercase leading-[0.9] mb-6 md:mb-8">
                    Silent Complaints <br />
                    <span className="text-tb-jade">Loud Reviews</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4">
                    <div className="bg-white border-3 border-tb-forest-ink shadow-neo p-5 md:p-8 rotate-1">
                        <h3 className="font-sans text-xl md:text-3xl font-bold text-tb-forest-ink mb-2 md:mb-4">No Feedback Inside</h3>
                        <p className="font-sans text-base md:text-xl text-tb-forest-ink/80">
                            90% of unhappy guests won't tell the manager. They just pay, leave, and never return.
                        </p>
                    </div>
                    <div className="bg-tb-sage-mist border-3 border-tb-forest-ink shadow-neo p-5 md:p-8 -rotate-1">
                        <h3 className="font-sans text-xl md:text-3xl font-bold text-tb-forest-ink mb-2 md:mb-4">Permanent Damage</h3>
                        <p className="font-sans text-base md:text-xl text-tb-forest-ink/80">
                            When they do speak up, it's a 1-star review on Google Maps that stays forever.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'solution',
        content: (
            <div className="flex flex-col justify-center min-h-full max-w-5xl mx-auto px-4 py-12 md:px-6">
                <div className="inline-block bg-tb-jade text-white border-3 border-tb-forest-ink px-3 py-1 font-mono font-bold text-sm md:text-lg mb-4 md:mb-6 shadow-neo rotate-2 self-start uppercase">
                    The Solution
                </div>
                <h2 className="font-syne text-3xl sm:text-5xl md:text-7xl font-black text-tb-forest-ink uppercase leading-[0.9] mb-6 md:mb-8">
                    Intercept Feedback <br />
                    <span className="text-tb-sienna">Before They Leave</span>
                </h2>
                <div className="bg-white border-3 md:border-4 border-tb-forest-ink shadow-neo p-6 md:p-10 -rotate-1 relative overflow-hidden">
                    <div className="absolute -right-12 -bottom-12 md:-right-16 md:-bottom-16 opacity-10">
                        <BirdMark className="w-32 md:w-64" animate={false} />
                    </div>
                    <p className="font-sans text-lg md:text-2xl text-tb-forest-ink font-bold leading-relaxed relative z-10">
                        TableBird places beautiful, custom QR codes on every table. Guests scan, rate their experience in 30 seconds, and you get pure, actionable data in real-time.
                    </p>
                    <ul className="mt-6 md:mt-8 space-y-3 font-sans text-base md:text-xl font-medium text-tb-forest-ink/90 relative z-10">
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-tb-sienna flex items-center justify-center text-white border-2 border-tb-forest-ink text-xs md:text-sm flex-shrink-0">✓</span>
                            No apps to download
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-tb-sienna flex items-center justify-center text-white border-2 border-tb-forest-ink text-xs md:text-sm flex-shrink-0">✓</span>
                            English & Arabic support
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-tb-sienna flex items-center justify-center text-white border-2 border-tb-forest-ink text-xs md:text-sm flex-shrink-0">✓</span>
                            Fully branded for your restaurant
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 'how-it-works',
        content: (
            <div className="flex flex-col justify-center min-h-full max-w-5xl mx-auto px-4 py-12 md:px-6 text-center">
                <h2 className="font-syne text-3xl sm:text-5xl md:text-7xl font-black text-tb-forest-ink uppercase mb-10 md:mb-16">
                    How It Works
                </h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-stretch mt-4 md:mt-0">
                    <div className="flex-1 bg-tb-warm-linen border-3 border-tb-forest-ink shadow-neo p-4 md:p-6 -rotate-2 relative pt-10 md:pt-12">
                        <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-tb-forest-ink text-white font-syne text-lg md:text-2xl font-bold flex items-center justify-center border-2 border-tb-forest-ink">1</div>
                        <h3 className="font-sans font-bold text-xl md:text-2xl text-tb-forest-ink mb-2 md:mb-3">Scan the Code</h3>
                        <p className="font-sans text-tb-forest-ink/80 text-sm md:text-lg">Guest points phone at the acrylic stand on their table.</p>
                    </div>
                    <div className="flex-1 bg-white border-3 border-tb-forest-ink shadow-neo p-4 md:p-6 rotate-1 relative pt-10 md:pt-12">
                        <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-tb-forest-ink text-white font-syne text-lg md:text-2xl font-bold flex items-center justify-center border-2 border-tb-forest-ink">2</div>
                        <h3 className="font-sans font-bold text-xl md:text-2xl text-tb-forest-ink mb-2 md:mb-3">Rate in 30 Sec</h3>
                        <p className="font-sans text-tb-forest-ink/80 text-sm md:text-lg">Quickly rate food, service, and atmosphere. No typing required.</p>
                    </div>
                    <div className="flex-1 bg-tb-sage-mist border-3 border-tb-forest-ink shadow-neo p-4 md:p-6 -rotate-1 relative pt-10 md:pt-12">
                        <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-tb-forest-ink text-white font-syne text-lg md:text-2xl font-bold flex items-center justify-center border-2 border-tb-forest-ink">3</div>
                        <h3 className="font-sans font-bold text-xl md:text-2xl text-tb-forest-ink mb-2 md:mb-3">Live Result</h3>
                        <p className="font-sans text-tb-forest-ink/80 text-sm md:text-lg">Results appear instantly on your manager's live dashboard.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'magic',
        content: (
            <div className="flex flex-col justify-center min-h-full max-w-5xl mx-auto px-4 py-12 md:px-6">
                 <h2 className="font-syne text-3xl sm:text-5xl md:text-7xl font-black text-tb-forest-ink uppercase leading-[0.9] mb-3 md:mb-4 text-center">
                    The Magic Route
                </h2>
                <div className="text-center mb-8 md:mb-12">
                    <p className="font-sans font-bold text-sm md:text-xl bg-white inline-block border-2 border-tb-forest-ink px-4 py-1 md:py-2 rotate-1 shadow-neo">
                        What happens after they submit?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <div className="bg-red-50 border-3 md:border-4 border-tb-forest-ink shadow-neo p-6 md:p-8 flex flex-col items-center text-center -rotate-2">
                        <div className="text-4xl md:text-6xl mb-3 md:mb-4">👎</div>
                        <h3 className="font-syne text-xl md:text-3xl font-black text-tb-forest-ink uppercase mb-1 md:mb-2">1 to 3 Stars</h3>
                        <div className="bg-red-500 text-white font-bold px-3 py-1 mb-3 md:mb-4 border-2 border-tb-forest-ink text-xs md:text-base">WhatsApp Alert!</div>
                        <p className="font-sans text-sm md:text-lg text-tb-forest-ink font-medium">
                            Manager's phone gets an instant WhatsApp. They can walk to the table and apologize before the guest leaves the door.
                        </p>
                    </div>

                    <div className="bg-green-50 border-3 md:border-4 border-tb-forest-ink shadow-neo p-6 md:p-8 flex flex-col items-center text-center rotate-2">
                        <div className="text-4xl md:text-6xl mb-3 md:mb-4">⭐</div>
                        <h3 className="font-syne text-xl md:text-3xl font-black text-tb-forest-ink uppercase mb-1 md:mb-2">4 to 5 Stars</h3>
                        <div className="bg-tb-jade text-white font-bold px-3 py-1 mb-3 md:mb-4 border-2 border-tb-forest-ink text-xs md:text-base">Google Boost!</div>
                        <p className="font-sans text-sm md:text-lg text-tb-forest-ink font-medium">
                            System asks "Loved it? Leave a review on Google!" Automatically funnels happy customers to boost public ratings.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'numbers',
        content: (
            <div className="flex flex-col justify-center items-center min-h-full max-w-5xl mx-auto px-4 py-12 md:px-6 text-center">
                 <h2 className="font-syne text-3xl sm:text-4xl md:text-6xl font-black text-tb-forest-ink uppercase mb-12 md:mb-16">
                    Real Results in Week 1
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center">
                    <div className="text-center relative bg-tb-sage-mist border-3 border-tb-forest-ink shadow-neo p-6 md:p-8 -rotate-3 w-48 md:w-64">
                        <p className="font-syne text-tb-forest-ink text-4xl md:text-6xl font-black">+85%</p>
                        <p className="font-sans text-tb-forest-ink font-bold text-xs md:text-lg mt-2 uppercase text-balance">Response Rate vs Email</p>
                    </div>
                    <div className="text-center relative bg-white border-3 border-tb-forest-ink shadow-neo p-6 md:p-8 rotate-1 w-48 md:w-64">
                        <p className="font-syne text-tb-forest-ink text-4xl md:text-6xl font-black">100%</p>
                        <p className="font-sans text-tb-forest-ink font-bold text-xs md:text-lg mt-2 uppercase text-balance">Blind spots removed</p>
                    </div>
                    <div className="text-center relative bg-tb-ember border-3 border-tb-forest-ink shadow-neo p-6 md:p-8 -rotate-2 w-48 md:w-64 text-white">
                        <p className="font-syne text-4xl md:text-6xl font-black">0</p>
                        <p className="font-sans font-bold text-xs md:text-lg mt-2 uppercase text-balance">Hardware Needed</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'pricing',
        content: (
            <div className="flex flex-col justify-center items-center min-h-full max-w-5xl mx-auto px-4 py-8 md:px-6">
                <div className="inline-block bg-tb-forest-ink text-white border-3 border-tb-forest-ink px-3 py-1 font-mono font-bold text-sm md:text-lg mb-4 md:mb-6 shadow-neo -rotate-2 uppercase">
                    Pricing
                </div>
                <h2 className="font-syne text-3xl sm:text-5xl md:text-7xl font-black text-tb-forest-ink uppercase mb-8 md:mb-12 text-center">
                    Simple in EGP
                </h2>
                
                <div className="bg-tb-warm-linen border-3 md:border-4 border-tb-forest-ink shadow-neo px-6 py-6 md:px-12 md:py-10 rotate-1 relative max-w-2xl w-full text-center">
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-tb-sienna text-white font-mono font-bold px-2 py-1 md:px-4 md:py-2 border-2 border-tb-forest-ink shadow-neo rotate-6 z-10 text-sm md:text-xl">
                        NO DOLLARS
                    </div>
                    <h3 className="font-syne text-xl md:text-3xl font-bold uppercase mb-1 md:mb-2">Pro Plan</h3>
                    <div className="flex justify-center items-baseline gap-1 md:gap-2 mb-4 md:mb-6">
                        <span className="font-syne text-4xl md:text-6xl font-black text-tb-forest-ink">999</span>
                        <span className="font-mono text-sm md:text-xl font-bold">EGP/mo</span>
                    </div>
                    <ul className="text-left font-sans text-sm md:text-xl space-y-2 md:space-y-3 mb-6 md:mb-8 mx-auto max-w-xs md:max-w-md">
                        <li className="flex gap-2 md:gap-3"><span className="text-tb-jade font-bold">✓</span> Custom Acryllic QR Signs</li>
                        <li className="flex gap-2 md:gap-3"><span className="text-tb-jade font-bold">✓</span> Live Manager Dashboard</li>
                        <li className="flex gap-2 md:gap-3"><span className="text-tb-jade font-bold">✓</span> WhatsApp Instant Alerts</li>
                        <li className="flex gap-2 md:gap-3"><span className="text-tb-jade font-bold">✓</span> Google Review Funnel</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 'cta',
        content: (
            <div className="flex flex-col items-center justify-center min-h-full text-center px-4 py-8 md:px-6 relative">
                <div className="absolute top-10 left-6 w-16 h-16 md:top-20 md:left-20 md:w-32 md:h-32 bg-tb-ember rounded-full border-2 md:border-4 border-tb-forest-ink shadow-neo rotate-12 pointer-events-none opacity-50 md:opacity-100"></div>
                <div className="absolute bottom-12 right-6 w-16 h-16 md:bottom-20 md:right-20 md:w-32 md:h-32 bg-tb-jade border-2 md:border-4 border-tb-forest-ink shadow-neo -rotate-45 pointer-events-none opacity-50 md:opacity-100"></div>
                
                <h2 className="font-syne text-4xl sm:text-6xl md:text-8xl font-black text-tb-forest-ink uppercase leading-tight mb-6 md:mb-10">
                    Let's fly.
                </h2>
                <div className="bg-white border-3 md:border-4 border-tb-forest-ink shadow-neo px-4 py-4 md:px-8 md:py-6 -rotate-1 mb-8 md:mb-12 max-w-sm md:max-w-xl">
                    <p className="font-sans text-lg md:text-2xl font-bold text-tb-forest-ink">
                        Start your 14-day free trial.<br/> No credit card required.
                    </p>
                </div>
                <TbButton variant="primary" className="text-lg md:text-2xl px-8 py-4 md:px-12 md:py-6 rotate-1 shadow-neo-hover">
                    Set up Trial Today
                </TbButton>
            </div>
        )
    }
];

export const PresentationPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Progress bar calculations
    const progress = ((currentSlide + 1) / slides.length) * 100;

    return (
        <div className="fixed inset-0 bg-tb-sand overflow-hidden flex flex-col font-sans">
            {/* Header / Nav */}
            <div className="h-16 md:h-20 border-b-4 border-tb-forest-ink bg-white flex items-center justify-between px-4 md:px-6 z-50 flex-shrink-0">
                <div className="flex items-center gap-2 md:gap-3">
                    <BirdMark className="w-6 md:w-8 text-tb-forest-ink" />
                    <div className="hidden sm:block">
                        <div className="md:hidden">
                            <Wordmark size="sm" variant="light" />
                        </div>
                        <div className="hidden md:block">
                            <Wordmark size="md" variant="light" />
                        </div>
                    </div>
                    <span className="font-mono text-[9px] md:text-xs font-bold border-l-2 border-tb-forest-ink pl-2 md:pl-3 ml-1 text-tb-forest-ink/60 uppercase">
                        B2B Pitch Deck
                    </span>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <span className="font-mono font-bold text-tb-forest-ink text-xs md:text-base">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <div className="flex gap-1 md:gap-2">
                        <button 
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className={`w-8 h-8 md:w-10 md:h-10 border-2 border-tb-forest-ink flex items-center justify-center font-bold text-sm md:text-base ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'bg-white hover:bg-tb-sand shadow-neo active:translate-y-1 active:shadow-none'}`}
                        >
                            ←
                        </button>
                        <button 
                            onClick={nextSlide}
                            disabled={currentSlide === slides.length - 1}
                            className={`w-8 h-8 md:w-10 md:h-10 border-2 border-tb-forest-ink flex items-center justify-center font-bold text-sm md:text-base ${currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'bg-white hover:bg-tb-sand shadow-neo active:translate-y-1 active:shadow-none'}`}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 md:h-2 w-full bg-white border-b-[3px] md:border-b-4 border-tb-forest-ink z-40 flex-shrink-0">
                <div 
                    className="h-full bg-tb-sienna border-r-[3px] md:border-r-4 border-tb-forest-ink transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Slide Area */}
            <div className="flex-1 relative overflow-hidden bg-tb-sand">
                <div 
                    className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div 
                            key={slide.id} 
                            className="w-full flex-shrink-0 h-full relative overflow-y-auto"
                            aria-hidden={currentSlide !== index}
                        >
                            <div className={`min-h-full w-full transition-opacity duration-500 pb-20 md:pb-0 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                                {slide.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile controls floating bar at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-tb-sand to-transparent pointer-events-none sm:hidden z-10"></div>
                <div className="absolute bottom-6 inset-x-0 flex justify-center gap-4 sm:hidden z-50">
                    <button 
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`px-5 py-2.5 border-2 border-tb-forest-ink font-bold uppercase text-sm ${currentSlide === 0 ? 'opacity-50 bg-gray-100' : 'bg-white shadow-neo'}`}
                    >
                        Prev
                    </button>
                    <button 
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className={`px-5 py-2.5 border-2 border-tb-forest-ink font-bold uppercase text-sm ${currentSlide === slides.length - 1 ? 'opacity-50 bg-gray-100' : 'bg-tb-sienna text-white shadow-neo'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
