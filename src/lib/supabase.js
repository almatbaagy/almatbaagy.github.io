import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// Helper function to get current user
export const getCurrentUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error)
        return null;
    return user;
};
// Helper function to get current profile
export const getCurrentProfile = async (userId) => {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
    if (error)
        return null;
    return data;
};
// Helper function to get business by slug
export const getBusinessBySlug = async (slug) => {
    const { data, error } = await supabase
        .from('businesses')
        .select('*, surveys(*)')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();
    if (error)
        return null;
    return data;
};
