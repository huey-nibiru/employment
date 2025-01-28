import { supabase } from "../../client";

export const fetchUsername = async () => {
	try {
		// Get authenticated user
		const {
			data: { user: authUser },
			error: authError,
		} = await supabase.auth.getUser();

		if (authError || !authUser) {
			throw new Error("Not authenticated");
		}

		// Fetch username from your 'user' table
		const { data, error } = await supabase
			.from("user") // Use '"user"' if table name is a reserved keyword
			.select("username")
			.eq("id", authUser.id)
			.single();

		if (error) throw error;
		return data?.username || null;
	} catch (error) {
		console.error("Error fetching username:", error);
		return null;
	}
};

export const fetchUserRating = async () => {
	try {
		// Get authenticated user
		const {
			data: { user: authUser },
			error: authError,
		} = await supabase.auth.getUser();

		if (authError || !authUser) {
			throw new Error("Not authenticated");
		}

		// Fetch rating from your 'user' table
		const { data, error } = await supabase
			.from("user") // Use '"user"' if table name is a reserved keyword
			.select("rating")
			.eq("id", authUser.id)
			.single();

		if (error) throw error;
		return data?.rating || null;
	} catch (error) {
		console.error("Error fetching user rating:", error);
		return null;
	}
};
