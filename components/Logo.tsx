export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Side profile of head */}
      <path
        d="M 75 25 C 75 25, 85 25, 90 30 C 95 35, 95 40, 95 50 C 95 55, 94 60, 92 65 C 90 70, 85 72, 82 75 L 82 85 C 82 85, 80 95, 70 95 C 60 95, 50 90, 45 85 L 40 75 C 40 75, 35 72, 33 68 C 30 62, 28 55, 28 48 C 28 40, 30 33, 35 28 C 40 23, 48 20, 55 20 C 62 20, 70 22, 75 25 Z"
        stroke="url(#gradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Forehead curve detail */}
      <path
        d="M 75 25 C 70 23, 63 22, 58 24"
        stroke="url(#gradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />

      {/* Brain area - synapses and neural network */}
      {/* Primary neural nodes */}
      <circle cx="65" cy="40" r="3" fill="url(#gradient)" opacity="0.95">
        <animate attributeName="opacity" values="0.95;1;0.95" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="48" r="3" fill="url(#gradient)" opacity="0.95">
        <animate attributeName="opacity" values="0.95;1;0.95" dur="2.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="58" r="3" fill="url(#gradient)" opacity="0.95">
        <animate attributeName="opacity" values="0.95;1;0.95" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="50" r="2.5" fill="url(#gradient)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="62" r="2.5" fill="url(#gradient)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.1s" repeatCount="indefinite" />
      </circle>

      {/* Secondary nodes */}
      <circle cx="80" cy="55" r="2" fill="url(#gradient)" opacity="0.85" />
      <circle cx="65" cy="68" r="2" fill="url(#gradient)" opacity="0.85" />
      <circle cx="50" cy="60" r="2" fill="url(#gradient)" opacity="0.85" />

      {/* Neural connections - synapses */}
      <line x1="65" y1="40" x2="75" y2="48" stroke="url(#gradient)" strokeWidth="1.8" opacity="0.7" strokeLinecap="round" />
      <line x1="75" y1="48" x2="70" y2="58" stroke="url(#gradient)" strokeWidth="1.8" opacity="0.7" strokeLinecap="round" />
      <line x1="65" y1="40" x2="55" y2="50" stroke="url(#gradient)" strokeWidth="1.8" opacity="0.7" strokeLinecap="round" />
      <line x1="55" y1="50" x2="60" y2="62" stroke="url(#gradient)" strokeWidth="1.8" opacity="0.7" strokeLinecap="round" />
      <line x1="70" y1="58" x2="60" y2="62" stroke="url(#gradient)" strokeWidth="1.8" opacity="0.7" strokeLinecap="round" />
      <line x1="75" y1="48" x2="80" y2="55" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      <line x1="70" y1="58" x2="65" y2="68" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      <line x1="55" y1="50" x2="50" y2="60" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      <line x1="60" y1="62" x2="50" y2="60" stroke="url(#gradient)" strokeWidth="1.3" opacity="0.5" strokeLinecap="round" />

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
