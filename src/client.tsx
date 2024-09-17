import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL as string; // Assert as string
const supabaseKey = process.env.VITE_SUPABASE_KEY as string; // Assert as string

if (typeof process === "undefined") {
	throw new Error(
		"Process is not defined. Ensure you're running in a Node environment."
	);
}

if (!supabaseKey) {
	throw new Error("Supabase key is not defined"); // Ensure supabaseKey is defined
}

export const supabase = createClient(supabaseUrl, supabaseKey);
