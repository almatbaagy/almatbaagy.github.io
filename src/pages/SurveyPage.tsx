import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StarRating, TbButton, TbCard, Wordmark, BirdMark } from '@/components/ui';
import { translations } from '@/lib/translations';
import { supabase, getBusinessBySlug } from '@/lib/supabase';

interface SurveyFormData {
    food: number;
    service: number;
    cleanliness: number;
    value: number;
    atmosphere: number;
    comment: string;
}

export const SurveyPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [language, setLanguage] = useState<'ar' | 'en'>('ar');
    const isRTL = language === 'ar';

    const [business, setBusiness] = useState<any>(null);
    const [survey, setSurvey] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState<SurveyFormData>({
        food: 0,
        service: 0,
        cleanliness: 0,
        value: 0,
        atmosphere: 0,
        comment: '',
    });

    const t = translations[language];
    const metrics = ['food', 'service', 'cleanliness', 'value', 'atmosphere'] as const;

    // Fetch business and survey on mount
    useEffect(() => {
        const fetchBusinessAndSurvey = async () => {
            if (!slug) {
                setError('Missing business slug');
                setLoading(false);
                return;
            }

            const data = await getBusinessBySlug(slug);
            if (!data || !data.surveys || data.surveys.length === 0) {
                setError('Survey not found');
                setLoading(false);
                return;
            }

            setBusiness(data);
            setSurvey(data.surveys[0]); // Get first active survey

            // Set default language from survey settings if available
            if (data.surveys[0]?.settings?.default_language) {
                setLanguage(data.surveys[0].settings.default_language as 'ar' | 'en');
            }

            setLoading(false);
        };

        fetchBusinessAndSurvey();
    }, [slug]);

    const handleRatingChange = (metric: keyof SurveyFormData, value: number) => {
        setFormData(prev => ({
            ...prev,
            [metric]: value,
        }));
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            comment: e.target.value,
        }));
    };

    const calculateAverageRating = (): number => {
        const ratings = [
            formData.food,
            formData.service,
            formData.cleanliness,
            formData.value,
            formData.atmosphere,
        ];
        const sum = ratings.reduce((acc, curr) => acc + curr, 0);
        return Math.round((sum / 5) * 100) / 100;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate that all ratings are filled
        if (metrics.some(metric => formData[metric] === 0)) {
            setError('Please rate all categories');
            return;
        }

        setSubmitting(true);
        setError(null);

        try {
            const averageRating = calculateAverageRating();

            // Prepare ratings object
            const ratings = {
                food: formData.food,
                service: formData.service,
                cleanliness: formData.cleanliness,
                value: formData.value,
                atmosphere: formData.atmosphere,
            };

            // Insert response into Supabase
            const { error: insertError } = await supabase
                .from('responses')
                .insert({
                    survey_id: survey.id,
                    ratings,
                    average_rating: averageRating,
                    comment: formData.comment || null,
                    metadata: {
                        language,
                        submitted_at: new Date().toISOString(),
                        user_agent: navigator.userAgent,
                    },
                });

            if (insertError) {
                throw insertError;
            }

            setSubmitted(true);
        } catch (err: any) {
            console.error('Error submitting survey:', err);
            setError(err.message || 'Failed to submit survey. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="text-center">
                    <BirdMark className="w-16 h-16 mx-auto mb-4 animate-float" animate={true} />
                    <p className="font-sans text-tb-forest-ink">Loading survey...</p>
                </div>
            </div>
        );
    }

    if (error && !business) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
                <TbCard className="max-w-md w-full mx-4 p-8 text-center">
                    <p className="font-sans text-tb-forest-ink text-lg mb-4">{error}</p>
                    <TbButton variant="primary" onClick={() => navigate('/')}>
                        {isRTL ? 'العودة للبيت' : 'Go Home'}
                    </TbButton>
                </TbCard>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist flex items-center justify-center p-4" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <BirdMark className="w-20 h-20 mx-auto mb-6 animate-fade-up" animate={true} />
                        <h1 className="font-syne text-4xl text-tb-forest-ink mb-4">{t.survey.successTitle}</h1>
                        <p className="font-sans text-tb-forest-ink text-base leading-relaxed">
                            {t.survey.successMessage}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <TbButton
                            variant="primary"
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({
                                    food: 0,
                                    service: 0,
                                    cleanliness: 0,
                                    value: 0,
                                    atmosphere: 0,
                                    comment: '',
                                });
                            }}
                        >
                            {t.survey.retakeButton}
                        </TbButton>
                        <TbButton
                            variant="secondary"
                            onClick={() => navigate('/')}
                        >
                            {t.survey.homeButton}
                        </TbButton>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Header with language toggle */}
            <div className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-tb-sage-mist">
                <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div>
                        <Wordmark variant="dark" size="sm" />
                    </div>
                    <button
                        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                        className="font-sans text-sm font-semibold px-3 py-1.5 rounded-lg bg-tb-sage-mist text-tb-forest-ink hover:bg-tb-jade hover:text-white transition-colors"
                    >
                        {language === 'ar' ? 'EN' : 'AR'}
                    </button>
                </div>
            </div>

            {/* Survey form */}
            <div className="max-w-2xl mx-auto px-4 py-12">
                {/* Business info */}
                {business && (
                    <div className="text-center mb-12">
                        {business.logo_url && (
                            <img
                                src={business.logo_url}
                                alt={business.name}
                                className="w-16 h-16 mx-auto mb-4 rounded-lg"
                            />
                        )}
                        <h1 className="font-syne text-3xl md:text-4xl text-tb-forest-ink mb-2">
                            {business.name}
                        </h1>
                        <p className="font-sans text-sm text-tb-forest-ink text-opacity-70">
                            {business.location}
                        </p>
                    </div>
                )}

                {/* Survey heading */}
                <div className="text-center mb-10">
                    <h2 className="font-syne text-3xl text-tb-forest-ink mb-2">{t.survey.title}</h2>
                    <p className="font-sans text-base text-tb-forest-ink text-opacity-70">{t.survey.subtitle}</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8 mb-8">
                    {/* Rating sections */}
                    {metrics.map((metric) => (
                        <TbCard key={metric} className="p-6">
                            <div className="flex flex-col gap-4">
                                <label className="font-sans font-semibold text-tb-forest-ink">
                                    {t.survey[`label${metric.charAt(0).toUpperCase() + metric.slice(1)}` as keyof typeof t.survey] as string}
                                </label>
                                <StarRating
                                    value={formData[metric]}
                                    onChange={(value) => handleRatingChange(metric, value)}
                                    size="lg"
                                />
                            </div>
                        </TbCard>
                    ))}

                    {/* Comments */}
                    <TbCard className="p-6">
                        <textarea
                            value={formData.comment}
                            onChange={handleCommentChange}
                            placeholder={t.survey.commentsPlaceholder}
                            rows={4}
                            className="w-full font-sans text-sm text-tb-forest-ink placeholder-tb-forest-ink placeholder-opacity-50 border border-tb-sage-mist rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-tb-sienna focus:border-transparent resize-none"
                        />
                    </TbCard>

                    {/* Error message */}
                    {error && (
                        <div className="bg-tb-sienna bg-opacity-10 border border-tb-sienna rounded-lg p-4">
                            <p className="font-sans text-sm text-tb-sienna">{error}</p>
                        </div>
                    )}

                    {/* Submit button */}
                    <TbButton
                        variant="primary"
                        type="submit"
                        disabled={submitting}
                        className="w-full"
                    >
                        {submitting ? t.survey.submittingButton : t.survey.submitButton}
                    </TbButton>
                </form>

                {/* Footer note */}
                <div className="text-center">
                    <p className="font-sans text-xs text-tb-forest-ink text-opacity-50">
                        {isRTL ? 'آرائك تساعدنا نحسّن الخدمة' : 'Your feedback helps us improve'}
                    </p>
                </div>
            </div>
        </div>
    );
};
