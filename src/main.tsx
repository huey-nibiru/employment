// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider, ExternalProvider } from "@ethersproject/providers";


function getLibrary(provider: unknown): Web3Provider {
	const library = new Web3Provider(provider as ExternalProvider);
	library.pollingInterval = 12000;
	return library;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Web3ReactProvider getLibrary={getLibrary}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Web3ReactProvider>
);
