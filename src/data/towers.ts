import type { CellTower } from '../types/cellTower';

export const towersData: CellTower[] = [
  // Cairo
  {
    id: 'c1',
    name: 'Cairo Central',
    city: 'Cairo',
    networkType: '5G',
    status: 'active',
    signalStrength: 5,
  },
  {
    id: 'c2',
    name: 'Cairo North',
    city: 'Cairo',
    networkType: '4G',
    status: 'active',
    signalStrength: 4,
  },
  {
    id: 'c3',
    name: 'Cairo East',
    city: 'Cairo',
    networkType: '4G',
    status: 'offline',
    signalStrength: 2,
  },

  // Alexandria
  {
    id: 'a1',
    name: 'Alex West',
    city: 'Alexandria',
    networkType: '5G',
    status: 'active',
    signalStrength: 4,
  },
  {
    id: 'a2',
    name: 'Alex Harbor',
    city: 'Alexandria',
    networkType: '4G',
    status: 'offline',
    signalStrength: 3,
  },
  {
    id: 'a3',
    name: 'Alex Center',
    city: 'Alexandria',
    networkType: '5G',
    status: 'active',
    signalStrength: 5,
  },

  // Hurghada
  {
    id: 'h1',
    name: 'Hurghada Bay',
    city: 'Hurghada',
    networkType: '4G',
    status: 'active',
    signalStrength: 4,
  },
  {
    id: 'h2',
    name: 'Hurghada North',
    city: 'Hurghada',
    networkType: '5G',
    status: 'offline',
    signalStrength: 2,
  },
  {
    id: 'h3',
    name: 'Hurghada South',
    city: 'Hurghada',
    networkType: '4G',
    status: 'active',
    signalStrength: 3,
  },

  // Luxor
  {
    id: 'l1',
    name: 'Luxor East',
    city: 'Luxor',
    networkType: '4G',
    status: 'active',
    signalStrength: 5,
  },
  {
    id: 'l2',
    name: 'Luxor Temple',
    city: 'Luxor',
    networkType: '5G',
    status: 'offline',
    signalStrength: 1,
  },
  {
    id: 'l3',
    name: 'Luxor Riverside',
    city: 'Luxor',
    networkType: '4G',
    status: 'active',
    signalStrength: 4,
  },
];
