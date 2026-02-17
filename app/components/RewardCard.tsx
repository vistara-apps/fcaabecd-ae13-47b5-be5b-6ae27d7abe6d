'use client';

import { Sparkles } from 'lucide-react';

interface RewardStat {
  label: string;
  value: string;
  color: string;
}

interface RewardCardProps {
  title: string;
  amount: string;
  currency: string;
  badge: string;
  stats: RewardStat[];
}

export function RewardCard({ title, amount, currency, badge, stats }: RewardCardProps) {
  return (
    <div className="glass-effect rounded-2xl p-6 glow-effect">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-fg">{title}</h4>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
          <Sparkles className="w-3 h-3" />
          {badge}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-fg">{amount}</span>
          <span className="text-xl text-fg-secondary">{currency}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="glass-effect rounded-xl p-3">
            <p className="text-xs text-fg-secondary mb-1">{stat.label}</p>
            <p className={`text-lg font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:opacity-90 transition-all">
        Claim Rewards
      </button>
    </div>
  );
}
