// App.tsx
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useWeb3React } from "@web3-react/core";
import { PhantomConnector } from "web3-react-v6-phantom";

const phantom = new PhantomConnector({
	supportedChainIds: [1, 5], // Mainnet and Goerli ChainIds
});

function App() {
	const { activate, deactivate, account } = useWeb3React();
	const handleConnect = async () => {
		try {
			await activate(phantom);
		} catch (e) {
			console.error(e);
		}
	};
	const handleDisconnect = () => {
		try {
			deactivate();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="App">
				<h1>Web3-React Connector Playbox</h1>
				<div className="wallet-connector">
					<button onClick={handleConnect}>Connect to Phantom!</button>
					<button onClick={handleDisconnect}>Disconnect</button>
					<p>{account ? account : "no account connected"}</p>
				</div>
			</div>
		</>
	);
}

export default App;
