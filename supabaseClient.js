import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://nuxvdtfpirliktpwifoi.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseURL, supabaseKey);