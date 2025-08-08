export type NetworkType = '4G' | '5G';
export type TowerStatus = 'active' | 'offline';
export type City = 'Cairo' | 'Alexandria' | 'Hurghada' | 'Luxor';

export interface CellTower {
  id: string;
  name: string;
  city: City;
  networkType: NetworkType;
  status: TowerStatus;
  signalStrength: number;
}
