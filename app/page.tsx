'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Mic, Trophy, Users, Sparkles, TrendingUp, Award } from 'lucide-react';
import { WalletButton } from './components/WalletButton';
import { VoiceCommandCard } from './components/VoiceCommandCard';
import { StatsCard } from './components/StatsCard';
import { RewardCard } from './components/RewardCard';

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-fg-secondary">Loading VāṇīVerse...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">VāṇīVerse</h1>
                <p className="text-xs text-fg-secondary">Hindi Voice Commands</p>
              </div>
            </div>
            <WalletButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-fg-secondary">Powered by X Layer</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-fg mb-4">
            सेवा पोद<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              सें व सी
            </span>
          </h2>
          
          <p className="text-lg text-fg-secondary max-w-2xl mx-auto mb-8">
            Co-create, share, and earn with localized Hindi voice commands on X Layer
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all glow-effect">
              Create Command
            </button>
            <button className="px-6 py-3 glass-effect text-fg rounded-xl font-semibold hover:bg-white/10 transition-all">
              Explore Library
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatsCard
            icon={<Users className="w-6 h-6" />}
            label="Active Creators"
            value="1,234"
            change="+12%"
          />
          <StatsCard
            icon={<Mic className="w-6 h-6" />}
            label="Voice Commands"
            value="5,678"
            change="+24%"
          />
          <StatsCard
            icon={<Trophy className="w-6 h-6" />}
            label="OKB Rewards"
            value="12.5K"
            change="+8%"
          />
        </div>

        {/* Rewards Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-fg">Your Rewards</h3>
            <button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RewardCard
              title="Total Home Earnings"
              amount="+0.98"
              currency="OKB"
              badge="Reward Alloc"
              stats={[
                { label: "Pool & Infra", value: "₹1", color: "from-purple-500 to-pink-500" },
                { label: "Rent & Water", value: "11,95...", color: "from-blue-500 to-cyan-500" },
                { label: "Govt & Maint", value: "₹4", color: "from-green-500 to-emerald-500" },
              ]}
            />
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-fg">Recent Activity</h4>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              
              <div className="space-y-4">
                {[
                  { action: "Command Created", reward: "+0.5 OKB", time: "2h ago" },
                  { action: "Quality Rating", reward: "+0.2 OKB", time: "5h ago" },
                  { action: "Community Vote", reward: "+0.1 OKB", time: "1d ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-fg font-medium">{activity.action}</p>
                      <p className="text-xs text-fg-secondary">{activity.time}</p>
                    </div>
                    <span className="text-success font-semibold">{activity.reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Commands */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-fg">Featured Commands</h3>
            <button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VoiceCommandCard
              title="लाइट चालू करो"
              description="Turn on the lights"
              creator="@priya_sharma"
              rating={4.8}
              uses={1234}
              verified={true}
            />
            <VoiceCommandCard
              title="तापमान बढ़ाओ"
              description="Increase temperature"
              creator="@raj_kumar"
              rating={4.6}
              uses={892}
              verified={true}
            />
            <VoiceCommandCard
              title="संगीत बजाओ"
              description="Play music"
              creator="@anita_dev"
              rating={4.9}
              uses={2156}
              verified={true}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-effect rounded-2xl p-8 text-center glow-effect">
          <Award className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-fg mb-2">Start Earning Today</h3>
          <p className="text-fg-secondary mb-6 max-w-2xl mx-auto">
            Create high-quality Hindi voice commands and earn OKB rewards from the community
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-fg-secondary">
              © 2024 VāṇīVerse. Built on X Layer.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                Docs
              </a>
              <a href="#" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                Community
              </a>
              <a href="#" className="text-sm text-fg-secondary hover:text-fg transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
