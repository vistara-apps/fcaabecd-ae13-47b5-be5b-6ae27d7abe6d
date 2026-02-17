'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function WalletButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = async () => {
    // Simulated wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  if (isConnected) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl text-sm font-medium text-fg hover:bg-white/10 transition-all">
        <div className="w-2 h-2 rounded-full bg-success"></div>
        {address}
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all"
    >
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </button>
  );
}
