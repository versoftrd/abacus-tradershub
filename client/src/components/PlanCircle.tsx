interface PlanCircleProps {
  size?: number;
  stroke?: number;
  dotSize?: number;
  dotAngle?: number;
  variant?: "neutral" | "accent";
  className?: string;
}

export default function PlanCircle({
  size = 56,
  stroke = 3,
  dotSize = 10,
  dotAngle = 315,
  variant = "neutral",
  className = ""
}: PlanCircleProps) {
  const radius = size / 2;
  const innerRadius = radius - stroke / 2;
  const center = size / 2;
  
  const angleInRadians = (dotAngle * Math.PI) / 180;
  const dotX = center + innerRadius * Math.cos(angleInRadians);
  const dotY = center + innerRadius * Math.sin(angleInRadians);
  
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`drop-shadow-sm ${className}`}
      aria-hidden="true"
    >
      {variant === "accent" && (
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
        r={radius - stroke / 2}
        fill="none"
        stroke={variant === "accent" ? `url(#${gradientId})` : "#E5E7EB"}
        strokeWidth={stroke}
        opacity={variant === "neutral" ? 0.9 : 1}
      />
      
      <circle
        cx={dotX}
        cy={dotY}
        r={dotSize / 2}
        fill={variant === "accent" ? "#22C55E" : "#FFFFFF"}
      />
    </svg>
  );
}