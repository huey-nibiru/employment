// src/main.tsx

import { supabase } from "./client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";


	// Render the App component into the root element of the HTML document
	ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
		<React.StrictMode>
			{" "}
			{/* Enable strict mode for highlighting potential problems in the app */}
			<App /> {/* Render the App component */}
		</React.StrictMode>
	);
