import { useState } from 'react';
import type { CellTower } from '../types/cellTower';
import Header from '../components/header';
import TowersTable from '../components/towers-table';
import { towersData } from '../data/towers';
import Filters from '../components/filters';

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

  const handleSearchChange = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  const handleCityChange = (newCity: string) => {
    setSelectedCity(newCity);
  };

  const filteredTowers = towersData.filter(tower => {
    const matchesSearch = tower.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCity = selectedCity ? tower.city === selectedCity : true;
    return matchesSearch && matchesCity;
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
      />

      <TowersTable towers={filteredTowers} />
    </main>
  );
}
