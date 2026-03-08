interface SectionLabelProps {
  text: string;
  centered?: boolean;
}

export default function SectionLabel({ text, centered = false }: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        justifyContent: centered ? 'center' : 'flex-start',
      }}
    >
      <span
        style={{
          display: 'block',
          width: 24,
          height: 2,
          background: 'linear-gradient(90deg, #06FFA5, #10B981)',
          borderRadius: 2,
        }}
      />
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 4,
          color: '#06FFA5',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </span>
      <span
        style={{
          display: 'block',
          width: 24,
          height: 2,
          background: 'linear-gradient(90deg, #10B981, #06FFA5)',
          borderRadius: 2,
        }}
      />
    </div>
  );
}
