import { createClient, SupabaseClient } from "@supabase/supabase-js";
//import dotenv from "dotenv";

// Load environment variables from .env file
//dotenv.config();

// Type-checking environment variables
//const supabaseUrl: string = process.env.VITE_SUPABASE_URL as string;
//const supabaseAnonKey: string = process.env.VITE_SUPABASE_ANON_KEY as string;

//const supabaseAnonKey: string =

//const supabaseUrl: string = 

// Ensure the environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase URL or Anon Key");
}

// Create a Supabase client instance
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
