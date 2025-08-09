import type { CellTower } from '../../types/cellTower';
import TowersPerCityBarChart from './TowersBarChart';
import TowersStatusPieChart from './TowersPieChart';

export default function TowersCharts({
  data,
  isLoading,
}: {
  data: CellTower[];
  isLoading: boolean;
}) {
  return (
    <div className="charts-container">
      <TowersStatusPieChart data={data} isLoading={isLoading} />
      <TowersPerCityBarChart data={data} isLoading={isLoading} />
    </div>
  );
}
