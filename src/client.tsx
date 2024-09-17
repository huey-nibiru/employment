import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL as string; // Assert supabaseUrl as string
const supabaseKey = process.env.SUPABASE_KEY as string; // Assert supabaseKey as string
if (!supabaseKey) {
	throw new Error("Supabase key is not defined"); // Ensure supabaseKey is defined
}
export const supabase = createClient(supabaseUrl, supabaseKey);
