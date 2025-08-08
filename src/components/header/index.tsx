import './Header.scss';
import SummaryCard from '../summary-card';

interface HeaderProps {
  totalTowers: number;
  activeTowers: number;
  averageSignal: number;
}

export default function Header({
  totalTowers,
  activeTowers,
  averageSignal,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Cell Tower Dashboard</h1>
        <p>Overview of Cell Tower Statistics</p>
      </div>

      <div className="summary-cards">
        <SummaryCard
          title="Total Towers"
          value={totalTowers}
          iconClass="fas fa-broadcast-tower"
        />
        <SummaryCard
          title="Active Towers"
          value={activeTowers}
          iconClass="fas fa-signal"
        />
        <SummaryCard
          title="Average Signal"
          value={`${averageSignal.toFixed(2)}%`}
          iconClass="fas fa-wifi"
        />
      </div>
    </header>
  );
}
