export interface Profile {
    id: string;
    name: string;
    role: 'admin' | 'owner';
    whatsapp_number: string | null;
    notification_preferences: { low_rating_alerts: boolean; weekly_digest: boolean };
    created_at: string;
}

export interface Business {
    id: string;
    owner_id: string;
    name: string;
    slug: string;
    location: string;
    logo_url: string | null;
    google_maps_url: string | null;
    whatsapp_number: string | null;
    is_active: boolean;
    subscription_tier: 'basic' | 'pro' | 'consulting';
    created_at: string;
}

export interface Survey {
    id: string;
    business_id: string;
    title: string;
    is_active: boolean;
    settings: SurveySettings;
    created_at: string;
}

export interface SurveySettings {
    enabled_metrics: MetricKey[];
    low_rating_threshold: number;
    high_rating_threshold: number;
    success_url: string | null;
    manager_whatsapp: string | null;
    send_whatsapp_alerts: boolean;
    default_language: 'ar' | 'en';
}

export type MetricKey = 'food' | 'service' | 'cleanliness' | 'value' | 'atmosphere';

export interface Response {
    id: string;
    survey_id: string;
    ratings: Record<MetricKey, number>;
    average_rating: number;
    comment: string | null;
    metadata: { ip_hash?: string; user_agent?: string; language?: string };
    created_at: string;
}

export interface Alert {
    id: string;
    response_id: string;
    business_id: string;
    type: 'whatsapp' | 'email';
    status: 'pending' | 'sent' | 'failed';
    payload: Record<string, unknown> | null;
    sent_at: string | null;
    created_at: string;
}
