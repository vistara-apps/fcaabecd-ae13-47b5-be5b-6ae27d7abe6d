'use client';

import { Award, Shield } from 'lucide-react';

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
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
          <Award className="w-3 h-3" />
          {badge}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-fg">{amount}</span>
          <span className="text-xl text-fg-secondary">{currency}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-effect rounded-xl p-3">
            <div className={`w-full h-1 rounded-full bg-gradient-to-r ${stat.color} mb-2`}></div>
            <p className="text-xs text-fg-secondary mb-1">{stat.label}</p>
            <p className="text-sm font-bold text-fg">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="flex-1 px-4 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all">
          Claim Rewards
        </button>
        <button className="p-2 glass-effect rounded-xl hover:bg-white/10 transition-all">
          <Shield className="w-5 h-5 text-fg-secondary" />
        </button>
      </div>
    </div>
  );
}
