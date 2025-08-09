import './Filters.scss';

interface FiltersProps {
  searchText: string;
  onSearchTextChange: (newSearchText: string) => void;
  selectedCity: string;
  onCityChange: (newCity: string) => void;
  networkType: string;
  onNetworkTypeChange: (newNetworkType: string) => void;
}

export default function Filters({
  searchText,
  onSearchTextChange,
  selectedCity,
  onCityChange,
  networkType,
  onNetworkTypeChange,
}: FiltersProps) {
  return (
    <div className="filters-container">
      <div className="filters-search">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          type="search"
          placeholder="Search by tower name..."
          value={searchText}
          onChange={e => onSearchTextChange(e.target.value)}
        />
      </div>

      <select value={selectedCity} onChange={e => onCityChange(e.target.value)}>
        <option value="">All Cities</option>
        <option value="Cairo">Cairo</option>
        <option value="Alexandria">Alexandria</option>
        <option value="Hurghada">Hurghada</option>
        <option value="Luxor">Luxor</option>
      </select>

      <select
        value={networkType}
        onChange={e => onNetworkTypeChange(e.target.value)}
      >
        <option value="">All Networks</option>
        <option value="4G">4G</option>
        <option value="5G">5G</option>
      </select>
    </div>
  );
}
