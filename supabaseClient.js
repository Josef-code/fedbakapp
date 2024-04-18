import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://nuxvdtfpirliktpwifoi.supabase.co';
const supabaseKey = import.meta.SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseURL, supabaseKey);