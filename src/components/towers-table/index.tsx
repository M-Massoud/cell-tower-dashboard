import './TowersTable.scss';
import type { CellTower } from '../../types/cellTower';
import SignalStrength from '../signal-strength';
import EmptyData from '../EmptyData';
import LoadingSpinner from '../loading';

export default function TowersTable({
  towers,
  isLoading,
}: {
  towers: CellTower[];
  isLoading: boolean;
}) {
  return (
    <div className="towers-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Network Type</th>
            <th>Status</th>
            <th>Signal Strength</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: '1rem' }}>
                <LoadingSpinner />
              </td>
            </tr>
          ) : towers.length > 0 ? (
            towers.map((tower: CellTower) => (
              <tr key={tower.id}>
                <td>{tower.name}</td>
                <td>{tower.city}</td>
                <td>{tower.networkType}</td>
                <td>
                  <span
                    className={`status-badge ${
                      tower.status === 'active' ? 'active' : 'offline'
                    }`}
                  >
                    {tower.status}
                  </span>
                </td>
                <td>
                  <div className="signal">
                    <SignalStrength strength={tower.signalStrength} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>
                <EmptyData />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
