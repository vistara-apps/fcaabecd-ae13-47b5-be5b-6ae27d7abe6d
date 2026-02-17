# VāṇīVerse - Hindi Voice Commands on X Layer

A Base Mini App for creating, sharing, and earning with localized Hindi voice commands for smart devices.

## Features

- 🎤 **Voice Command Library**: Create and mint Hindi voice commands as NFTs
- 🏆 **Reputation System**: Earn reputation through quality contributions (SBTs)
- 🔗 **Farcaster Integration**: Share voice commands as social frames
- 💰 **OKB Rewards**: Earn rewards for curation and quality contributions
- ⚡ **X Layer Optimized**: Low gas costs and fast finality

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit SDK
- Tailwind CSS with BASE theme
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Architecture

- **Smart Contracts**: Voice command NFTs, Reputation SBTs, Reward distribution
- **Storage**: IPFS for audio files, on-chain metadata
- **Network**: X Layer (Chain ID: 196)
- **Wallet**: OKX Wallet integration

## Key Components

- `WalletButton`: OKX Wallet connection
- `VoiceCommandCard`: Display voice commands with ratings
- `RewardCard`: Show earnings and claim rewards
- `StatsCard`: Display platform statistics

## License

MIT
