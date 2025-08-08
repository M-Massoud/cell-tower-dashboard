import './SummaryCard.scss';

interface SummaryCardProps {
  title: string;
  value: string | number;
  iconClass: string; // Font Awesome class for the icon
}

export default function SummaryCard({ title, value, iconClass }: SummaryCardProps) {
  return (
    <div className="summary-card">
      <div className="summary-card-content">
        <h3 className="summary-card-title">{title}</h3>
        <p className="summary-card-value">{value}</p>
      </div>

      <div className="summary-card-icon">
        <i className={iconClass}></i>
      </div>
    </div>
  );
}
