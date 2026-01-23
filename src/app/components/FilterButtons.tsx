'use client'

interface Props {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterButtons({ activeFilter, onFilterChange }: Props) {
  const filters = ['Sexe', 'Propriétaire', 'Espèce', 'Vaccination'];

  return (
    <div className='filter-container'>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
