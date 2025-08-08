import './SignalStrength.scss';

export default function SignalStrength({ strength }: { strength: number }) {
  const maxBars = 5;

  return (
    <div className="signal-strength">
      {[...Array(maxBars)].map((_, i) => (
        <div
          key={i}
          className={`signal-bar ${i < strength ? 'filled' : 'empty'}`}
        ></div>
      ))}
    </div>
  );
}
