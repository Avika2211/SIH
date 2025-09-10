interface ProgressRingProps {
  percentage: number;
  size?: number;
}

export default function ProgressRing({ percentage, size = 64 }: ProgressRingProps) {
  const radius = 15.915;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        className="progress-ring" 
        width={size} 
        height={size} 
        viewBox="0 0 42 42"
        data-testid="progress-ring"
      >
        <circle 
          cx="21" 
          cy="21" 
          r={radius} 
          fill="transparent" 
          stroke="hsl(var(--border))" 
          strokeWidth="3"
        />
        <circle 
          cx="21" 
          cy="21" 
          r={radius} 
          fill="transparent" 
          stroke="hsl(var(--primary))" 
          strokeWidth="3" 
          strokeDasharray={strokeDasharray}
          strokeDashoffset="0" 
          className="progress-ring-fill"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold" data-testid="text-progress-percentage">{percentage}%</span>
      </div>
    </div>
  );
}
