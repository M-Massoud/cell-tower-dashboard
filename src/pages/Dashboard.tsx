import { useEffect, useState } from 'react';
import type { CellTower } from '../types/cellTower';
import Header from '../components/header';
import TowersTable from '../components/towers-table';
import { towersData } from '../data/towers';
import Filters from '../components/filters';
import TowersCharts from '../components/charts';

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

export default function Dashboard() {
  const [searchText, setSearchText] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [networkType, setNetworkType] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // this is to simulate a loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  const handleCityChange = (newCity: string) => {
    setSelectedCity(newCity);
  };

  const handleNetworkTypeChange = (newNetworkType: string) => {
    setNetworkType(newNetworkType);
  };

  const filteredTowers = towersData.filter(tower => {
    const matchesSearch = tower.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCity = selectedCity ? tower.city === selectedCity : true;

    const matchesNetwork = networkType ? tower.networkType === networkType : true;

    return matchesSearch && matchesCity && matchesNetwork;
  });

  return (
    <main>
      <Header
        totalTowers={totalTowers}
        activeTowers={activeTowers}
        averageSignal={averageSignal}
      />

      <Filters
        searchText={searchText}
        onSearchTextChange={handleSearchChange}
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
        networkType={networkType}
        onNetworkTypeChange={handleNetworkTypeChange}
      />

      <TowersTable towers={filteredTowers} isLoading={isLoading} />

      <TowersCharts data={filteredTowers} isLoading={isLoading} />
    </main>
  );
}
