import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StarRating, TbButton, TbCard, Wordmark, BirdMark } from '@/components/ui';
import { translations } from '@/lib/translations';
import { supabase, getBusinessBySlug } from '@/lib/supabase';
export const SurveyPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [language, setLanguage] = useState('ar');
    const isRTL = language === 'ar';
    const [business, setBusiness] = useState(null);
    const [survey, setSurvey] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        food: 0,
        service: 0,
        cleanliness: 0,
        value: 0,
        atmosphere: 0,
        comment: '',
    });
    const t = translations[language];
    const metrics = ['food', 'service', 'cleanliness', 'value', 'atmosphere'];
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
                setLanguage(data.surveys[0].settings.default_language);
            }
            setLoading(false);
        };
        fetchBusinessAndSurvey();
    }, [slug]);
    const handleRatingChange = (metric, value) => {
        setFormData(prev => ({
            ...prev,
            [metric]: value,
        }));
    };
    const handleCommentChange = (e) => {
        setFormData(prev => ({
            ...prev,
            comment: e.target.value,
        }));
    };
    const calculateAverageRating = () => {
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
    const handleSubmit = async (e) => {
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
        }
        catch (err) {
            console.error('Error submitting survey:', err);
            setError(err.message || 'Failed to submit survey. Please try again.');
        }
        finally {
            setSubmitting(false);
        }
    };
    if (loading) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist flex items-center justify-center", dir: isRTL ? 'rtl' : 'ltr', children: _jsxs("div", { className: "text-center", children: [_jsx(BirdMark, { className: "w-16 h-16 mx-auto mb-4 animate-float", animate: true }), _jsx("p", { className: "font-sans text-tb-forest-ink", children: "Loading survey..." })] }) }));
    }
    if (error && !business) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist flex items-center justify-center", dir: isRTL ? 'rtl' : 'ltr', children: _jsxs(TbCard, { className: "max-w-md w-full mx-4 p-8 text-center", children: [_jsx("p", { className: "font-sans text-tb-forest-ink text-lg mb-4", children: error }), _jsx(TbButton, { variant: "primary", onClick: () => navigate('/'), children: isRTL ? 'العودة للبيت' : 'Go Home' })] }) }));
    }
    if (submitted) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist flex items-center justify-center p-4", dir: isRTL ? 'rtl' : 'ltr', children: _jsxs("div", { className: "max-w-md w-full", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(BirdMark, { className: "w-20 h-20 mx-auto mb-6 animate-fade-up", animate: true }), _jsx("h1", { className: "font-syne text-4xl text-tb-forest-ink mb-4", children: t.survey.successTitle }), _jsx("p", { className: "font-sans text-tb-forest-ink text-base leading-relaxed", children: t.survey.successMessage })] }), _jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(TbButton, { variant: "primary", onClick: () => {
                                    setSubmitted(false);
                                    setFormData({
                                        food: 0,
                                        service: 0,
                                        cleanliness: 0,
                                        value: 0,
                                        atmosphere: 0,
                                        comment: '',
                                    });
                                }, children: t.survey.retakeButton }), _jsx(TbButton, { variant: "secondary", onClick: () => navigate('/'), children: t.survey.homeButton })] })] }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-tb-sand to-tb-sage-mist", dir: isRTL ? 'rtl' : 'ltr', children: [_jsx("div", { className: "sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-tb-sage-mist", children: _jsxs("div", { className: "max-w-2xl mx-auto px-4 h-16 flex items-center justify-between", children: [_jsx("div", { children: _jsx(Wordmark, { variant: "dark", size: "sm" }) }), _jsx("button", { onClick: () => setLanguage(language === 'ar' ? 'en' : 'ar'), className: "font-sans text-sm font-semibold px-3 py-1.5 rounded-lg bg-tb-sage-mist text-tb-forest-ink hover:bg-tb-jade hover:text-white transition-colors", children: language === 'ar' ? 'EN' : 'AR' })] }) }), _jsxs("div", { className: "max-w-2xl mx-auto px-4 py-12", children: [business && (_jsxs("div", { className: "text-center mb-12", children: [business.logo_url && (_jsx("img", { src: business.logo_url, alt: business.name, className: "w-16 h-16 mx-auto mb-4 rounded-lg" })), _jsx("h1", { className: "font-syne text-3xl md:text-4xl text-tb-forest-ink mb-2", children: business.name }), _jsx("p", { className: "font-sans text-sm text-tb-forest-ink text-opacity-70", children: business.location })] })), _jsxs("div", { className: "text-center mb-10", children: [_jsx("h2", { className: "font-syne text-3xl text-tb-forest-ink mb-2", children: t.survey.title }), _jsx("p", { className: "font-sans text-base text-tb-forest-ink text-opacity-70", children: t.survey.subtitle })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-8 mb-8", children: [metrics.map((metric) => (_jsx(TbCard, { className: "p-6", children: _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("label", { className: "font-sans font-semibold text-tb-forest-ink", children: t.survey[`label${metric.charAt(0).toUpperCase() + metric.slice(1)}`] }), _jsx(StarRating, { value: formData[metric], onChange: (value) => handleRatingChange(metric, value), size: "lg" })] }) }, metric))), _jsx(TbCard, { className: "p-6", children: _jsx("textarea", { value: formData.comment, onChange: handleCommentChange, placeholder: t.survey.commentsPlaceholder, rows: 4, className: "w-full font-sans text-sm text-tb-forest-ink placeholder-tb-forest-ink placeholder-opacity-50 border border-tb-sage-mist rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-tb-sienna focus:border-transparent resize-none" }) }), error && (_jsx("div", { className: "bg-tb-sienna bg-opacity-10 border border-tb-sienna rounded-lg p-4", children: _jsx("p", { className: "font-sans text-sm text-tb-sienna", children: error }) })), _jsx(TbButton, { variant: "primary", type: "submit", disabled: submitting, className: "w-full", children: submitting ? t.survey.submittingButton : t.survey.submitButton })] }), _jsx("div", { className: "text-center", children: _jsx("p", { className: "font-sans text-xs text-tb-forest-ink text-opacity-50", children: isRTL ? 'آرائك تساعدنا نحسّن الخدمة' : 'Your feedback helps us improve' }) })] })] }));
};
