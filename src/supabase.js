import { createClient } from '@supabase/supabase-js';

// Get keys from environment variables or use placeholders
// The user should set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in an .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper to check if Supabase is actually configured or using placeholders
export const isSupabaseConfigured = supabaseUrl !== 'https://placeholder-url.supabase.co';
