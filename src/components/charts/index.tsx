import type { CellTower } from '../../types/cellTower';
import TowersPerCityBarChart from './TowersBarChart';
import TowersStatusPieChart from './TowersPieChart';

export default function TowersCharts({ data }: { data: CellTower[] }) {
  return (
    <div className="charts-container">
      <TowersStatusPieChart data={data} />
      <TowersPerCityBarChart data={data} />
    </div>
  );
}
