import './Filters.scss';

interface FiltersProps {
  searchText: string;
  onSearchTextChange: (newSearchText: string) => void;
  selectedCity: string;
  onCityChange: (newCity: string) => void;
}

export default function Filters({
  searchText,
  onSearchTextChange,
  selectedCity,
  onCityChange,
}: FiltersProps) {
  return (
    <div className="filters-container">
      <div className="filters-search">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Search by tower name..."
          value={searchText}
          onChange={e => onSearchTextChange(e.target.value)}
        />
      </div>

      <div className="filters-city">
        <select value={selectedCity} onChange={e => onCityChange(e.target.value)}>
          <option value="">All Cities</option>
          <option value="Cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Hurghada">Hurghada</option>
          <option value="Luxor">Luxor</option>
        </select>
      </div>
    </div>
  );
}
