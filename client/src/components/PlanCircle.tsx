interface PlanCircleProps {
  size?: number;
  stroke?: number;
  innerSize?: number;
  variant?: "neutral" | "accent" | "filled";
  className?: string;
}

export default function PlanCircle({
  size = 56,
  stroke = 1,
  innerSize = 20,
  variant = "neutral",
  className = ""
}: PlanCircleProps) {
  const radius = size / 2;
  const center = size / 2;
  const innerRadius = innerSize / 2;
  
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`drop-shadow-sm ${className}`}
      aria-hidden="true"
    >
      {(variant === "accent" || variant === "filled") && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>
      )}
      
      <circle
        cx={center}
        cy={center}
        r={variant === "filled" ? radius - (stroke * 2) / 2 : radius - stroke / 2}
        fill="none"
        stroke={variant === "accent" ? `url(#${gradientId})` : variant === "filled" ? "#E5E7EB" : "#E5E7EB"}
        strokeWidth={variant === "filled" ? stroke * 2 : stroke}
        opacity={variant === "neutral" ? 0.9 : 1}
      />
      
      <circle
        cx={center}
        cy={center}
        r={innerRadius}
        fill={variant === "filled" ? `url(#${gradientId})` : "none"}
        stroke={variant === "accent" ? "#22C55E" : variant === "filled" ? "none" : "#FFFFFF"}
        strokeWidth={variant === "filled" ? 0 : 6}
      />
    </svg>
  );
}