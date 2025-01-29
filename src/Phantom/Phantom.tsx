// App.tsx

import "./Phantom.css";
import { useWeb3React } from "@web3-react/core";
import { PhantomConnector } from "web3-react-v6-phantom";

const phantom = new PhantomConnector({
	supportedChainIds: [1, 5], // Only Solana Mainnet ChainId
});

function PhantomButton() {
	const { activate, deactivate, account } = useWeb3React();
	const handleConnect = async () => {
		try {
			await activate(phantom);
			console.log("Connected", account);
		} catch (e) {
			console.error(e);
		}
	};
	const handleDisconnect = () => {
		try {
			deactivate();
			console.log("Disconnected");
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<div className="Phantom-btn">
				<div className="wallet-connector">
					{account ? (
						<button onClick={handleDisconnect} className="disconnect-btn">
							Disconnect
						</button>
					) : (
						<button onClick={handleConnect} className="connect-btn">
							Connect to Phantom
						</button>
					)}
					{/* <p>{account ? account : "no account connected"}</p> */}
				</div>
			</div>
		</>
	);
}

export default PhantomButton;
