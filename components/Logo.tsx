export default function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head outline */}
      <path
        d="M50 10 C30 10, 20 25, 20 45 C20 55, 22 65, 25 72 L30 85 L40 90 L60 90 L70 85 L75 72 C78 65, 80 55, 80 45 C80 25, 70 10, 50 10 Z"
        stroke="url(#gradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Brain synapses - neural network nodes */}
      <circle cx="40" cy="35" r="3" fill="url(#gradient)" opacity="0.9" />
      <circle cx="60" cy="35" r="3" fill="url(#gradient)" opacity="0.9" />
      <circle cx="50" cy="45" r="3" fill="url(#gradient)" opacity="0.9" />
      <circle cx="35" cy="50" r="2.5" fill="url(#gradient)" opacity="0.8" />
      <circle cx="65" cy="50" r="2.5" fill="url(#gradient)" opacity="0.8" />
      <circle cx="45" cy="60" r="2.5" fill="url(#gradient)" opacity="0.8" />
      <circle cx="55" cy="60" r="2.5" fill="url(#gradient)" opacity="0.8" />

      {/* Neural connections */}
      <line x1="40" y1="35" x2="50" y2="45" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="60" y1="35" x2="50" y2="45" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="45" x2="35" y2="50" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="45" x2="65" y2="50" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="45" x2="45" y2="60" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="45" x2="55" y2="60" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="35" y1="50" x2="45" y2="60" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.5" />
      <line x1="65" y1="50" x2="55" y2="60" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.5" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}
