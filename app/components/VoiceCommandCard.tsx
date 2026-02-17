'use client';

import { Star, Users, CheckCircle, Share2 } from 'lucide-react';

interface VoiceCommandCardProps {
  title: string;
  description: string;
  creator: string;
  rating: number;
  uses: number;
  verified?: boolean;
}

export function VoiceCommandCard({
  title,
  description,
  creator,
  rating,
  uses,
  verified = false,
}: VoiceCommandCardProps) {
  return (
    <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-fg mb-1 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-sm text-fg-secondary">{description}</p>
        </div>
        {verified && (
          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
        )}
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-fg-secondary">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span>{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{uses.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-sm text-fg-secondary">{creator}</span>
        <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
          <Share2 className="w-4 h-4 text-fg-secondary" />
        </button>
      </div>
    </div>
  );
}
