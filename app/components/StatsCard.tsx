'use client';

import { TrendingUp } from 'lucide-react';
import { type ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  change: string;
}

export function StatsCard({ icon, label, value, change }: StatsCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
          <TrendingUp className="w-4 h-4" />
          {change}
        </div>
      </div>
      <p className="text-sm text-fg-secondary mb-1">{label}</p>
      <p className="text-3xl font-bold text-fg">{value}</p>
    </div>
  );
}
