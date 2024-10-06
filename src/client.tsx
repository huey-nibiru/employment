import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://amtxwkqlouwsxedgcdvh.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdHh3a3Fsb3V3c3hlZGdjZHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MTk4MzIsImV4cCI6MjAzODM5NTgzMn0.-MKb9jVx8QcT9NDfM8rYNFbjd7rfPmWbWExvSgF5cms";


export const supabase = createClient(supabaseUrl, supabaseKey);

