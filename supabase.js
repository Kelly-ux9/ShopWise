import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const SUPABASE_URL = "https://rmgnkmkrudousaqjfwxt.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_oDAoLSTC77M3xkMzq8sIxQ_QJOsooAl";
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
