import Header from '../components/header';
import { towersData } from '../data/towers';
import type { CellTower } from '../types/cellTower';

export default function Dashboard() {
  const totalTowers = towersData.length;

  const activeTowers = towersData.filter(
    (tower: CellTower) => tower.status === 'active'
  ).length;

  // Average signal strength as a percentage
  // Assuming signalStrength is 1–5, convert to %
  const averageSignal =
    (towersData.reduce((sum, tower) => sum + tower.signalStrength, 0) /
      totalTowers /
      5) *
    100;

  return (
    <div>
      <Header
        totalTowers={totalTowers}
        activeTowers={activeTowers}
        averageSignal={averageSignal}
      />
    </div>
  );
}
