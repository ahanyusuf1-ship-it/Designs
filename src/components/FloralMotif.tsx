import React from 'react';

// 5-Petal Flower Icon
export const SingleFlower: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 20,
  color = "#C19A5B",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* 5 Petals */}
    <circle cx="20" cy="11" r="7" fill={color} />
    <circle cx="28.5" cy="17.2" r="7" fill={color} />
    <circle cx="25.3" cy="27.3" r="7" fill={color} />
    <circle cx="14.7" cy="27.3" r="7" fill={color} />
    <circle cx="11.5" cy="17.2" r="7" fill={color} />
    {/* Center Core */}
    <circle cx="20" cy="20" r="5" fill="#E8DEC8" />
  </svg>
);

// 3-Flower Cluster Motif (as seen on Nikah/Reception card headers)
export const FlowerCluster: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-1 opacity-90 ${className}`}>
    <SingleFlower size={18} color="#4A1525" />
    <SingleFlower size={24} color="#802336" />
    <SingleFlower size={14} color="#4A1525" />
  </div>
);

// Gold Hairline Divider with Center Flower Motif
export const HairlineFlowerDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`gold-hairline-divider ${className}`}>
    <SingleFlower size={16} color="#C19A5B" />
  </div>
);

// Corner Floral Cluster (as seen on Cover & Hero invitation card corners)
export const CornerFloralCluster: React.FC<{ position: 'top-right' | 'bottom-left'; className?: string }> = ({
  position,
  className = "",
}) => {
  if (position === 'top-right') {
    return (
      <div className={`absolute top-0 right-0 pointer-events-none ${className}`}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="95" cy="25" r="22" fill="#4A1525" opacity="0.85" />
          <circle cx="70" cy="15" r="16" fill="#802336" opacity="0.75" />
          <circle cx="105" cy="60" r="14" fill="#4A1525" opacity="0.9" />
          <circle cx="115" cy="35" r="10" fill="#802336" opacity="0.8" />
        </svg>
      </div>
    );
  }
  return (
    <div className={`absolute bottom-0 left-0 pointer-events-none ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="25" cy="95" r="22" fill="#4A1525" opacity="0.85" />
        <circle cx="50" cy="105" r="16" fill="#802336" opacity="0.75" />
        <circle cx="15" cy="60" r="14" fill="#4A1525" opacity="0.9" />
        <circle cx="35" cy="115" r="10" fill="#802336" opacity="0.8" />
      </svg>
    </div>
  );
};
