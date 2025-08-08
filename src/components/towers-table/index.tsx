import './TowersTable.scss';
import type { CellTower } from '../../types/cellTower';
import SignalStrength from '../signal-strength';

export default function TowersTable({ towers }: { towers: CellTower[] }) {
  return (
    <div>
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
            {towers.length > 0 ? (
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
                <td colSpan={5} className="no-data">
                  No towers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
