import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "YOUR_PROJECT_URL"
const supabaseKey = "YOUR_PUBLIC_ANON_KEY"

export const db = createClient(supabaseUrl, supabaseKey)
