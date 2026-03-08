interface OrbProps {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  size?: number;
  color?: string;
  opacity?: number;
}

export default function Orb({
  top, left, right, bottom,
  size = 400,
  color = '#06FFA5',
  opacity = 0.07,
}: OrbProps) {
  const opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');

  return (
    <div
      className="animate-glow-pulse"
      style={{
        position: 'absolute',
        top, left, right, bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}${opacityHex} 0%, transparent 70%)`,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
