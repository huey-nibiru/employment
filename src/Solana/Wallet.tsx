import { useState, useEffect, useCallback } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { getAccount, getMint } from '@solana/spl-token';

interface TokenBalanceProps {
  mintAddress: string;
  network?: 'devnet' | 'mainnet-beta';
}

interface TokenBalanceResult {
  balance: number | null;
  decimals: number | null;
  loading: boolean;
  error: string | null;
}

const useTokenBalance = ({ mintAddress, network = 'devnet' }: TokenBalanceProps): TokenBalanceResult => {
  const [balance, setBalance] = useState<number | null>(null);
  const [decimals, setDecimals] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<any>(null);

  const connectWallet = useCallback(async () => {
    try {
      if (!('phantom' in window) || !window.phantom?.solana?.isPhantom) {
        throw new Error('Phantom wallet not installed');
      }

      const phantomProvider = window.phantom.solana;
      await phantomProvider.connect();
      setProvider(phantomProvider);
      return new PublicKey(phantomProvider.publicKey);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
      throw err;
    }
  }, []);

  const fetchTokenBalance = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (!mintAddress) {
        throw new Error('Mint address is required');
      }

      const connection = new Connection(clusterApiUrl(network));
      const publicKey = await connectWallet();
      const mintPublicKey = new PublicKey(mintAddress);

      // Get token account
      const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, {
        mint: mintPublicKey,
      });

      if (tokenAccounts.value.length === 0) {
        setBalance(0);
        setDecimals(0);
        return;
      }

      // Get account info and mint details
      const accountInfo = await getAccount(connection, tokenAccounts.value[0].pubkey);
      const mintInfo = await getMint(connection, mintPublicKey);

      const calculatedBalance = Number(accountInfo.amount) / Math.pow(10, mintInfo.decimals);
      
      setBalance(calculatedBalance);
      setDecimals(mintInfo.decimals);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch balance');
      setBalance(null);
      setDecimals(null);
    } finally {
      setLoading(false);
    }
  }, [mintAddress, network, connectWallet]);

  useEffect(() => {
    if (mintAddress) {
      fetchTokenBalance();
    }
  }, [mintAddress, network, fetchTokenBalance]);

  return { balance, decimals, loading, error };
};

// Usage Component
const TokenBalanceDisplay: React.FC<TokenBalanceProps> = ({ mintAddress, network }) => {
  const { balance, decimals, loading, error } = useTokenBalance({ mintAddress, network });

  if (loading) return <div>Loading balance...</div>;
  if (error) return <div>Error: {error}</div>;
  if (balance === null) return <div>No balance available</div>;

  return (
    <div>
      <h3>Token Balance</h3>
      <p>Mint Address: {mintAddress}</p>
      <p>Balance: {balance.toLocaleString()} ({decimals} decimals)</p>
    </div>
  );
};

export default TokenBalanceDisplay;