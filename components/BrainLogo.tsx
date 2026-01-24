export default function BrainLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head outline */}
      <circle cx="50" cy="50" r="45" stroke="url(#gradient)" strokeWidth="2" fill="none" />

      {/* Brain synapses - neural network pattern */}
      {/* Central nodes */}
      <circle cx="50" cy="35" r="3" fill="url(#gradient)" />
      <circle cx="35" cy="50" r="3" fill="url(#gradient)" />
      <circle cx="65" cy="50" r="3" fill="url(#gradient)" />
      <circle cx="50" cy="65" r="3" fill="url(#gradient)" />
      <circle cx="40" cy="40" r="2.5" fill="url(#gradient)" opacity="0.8" />
      <circle cx="60" cy="40" r="2.5" fill="url(#gradient)" opacity="0.8" />
      <circle cx="40" cy="60" r="2.5" fill="url(#gradient)" opacity="0.8" />
      <circle cx="60" cy="60" r="2.5" fill="url(#gradient)" opacity="0.8" />

      {/* Synapse connections */}
      <line x1="50" y1="35" x2="40" y2="40" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="50" y1="35" x2="60" y2="40" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="35" y1="50" x2="40" y2="40" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="35" y1="50" x2="40" y2="60" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="65" y1="50" x2="60" y2="40" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="65" y1="50" x2="60" y2="60" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="50" y1="65" x2="40" y2="60" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="50" y1="65" x2="60" y2="60" stroke="url(#gradient)" strokeWidth="1" opacity="0.6" />
      <line x1="40" y1="40" x2="60" y2="60" stroke="url(#gradient)" strokeWidth="0.8" opacity="0.4" />
      <line x1="60" y1="40" x2="40" y2="60" stroke="url(#gradient)" strokeWidth="0.8" opacity="0.4" />

      {/* Additional neural pathways */}
      <path d="M 30 45 Q 50 50 70 45" stroke="url(#gradient)" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M 30 55 Q 50 50 70 55" stroke="url(#gradient)" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* Animated pulse effect */}
      <circle cx="50" cy="50" r="5" fill="url(#gradient)" opacity="0.3">
        <animate
          attributeName="r"
          values="5;8;5"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}
