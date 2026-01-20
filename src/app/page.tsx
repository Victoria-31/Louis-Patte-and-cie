'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { fetchMockData } from '../utils/data-fetch'
import { normalizeAnimal } from '../utils/normalizers';
import SearchBar from '../components/SearchableAnimalList'
import FilterButtons from '../components/FilterButtons'
import type { MockData, Animal, Proprietaire, Vaccination } from '../types'
import {getAllAnimals, getAllOwners, getAllVaccinations} from '../utils/request'


export default function Page() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('Sexe')
  const [mockData, setMockData] = useState<MockData | null>(null)
  const [animals, setAnimals] = useState([]);
  const [vaccines, setVaccinations] = useState([]);
  const [owners, setOwners] = useState([]);


  

const fetchData = async () => {
  const animalsFetch = await getAllAnimals();
  setAnimals(animalsFetch.data.map(normalizeAnimal));
};

  // Load data on mount
  useEffect(() => {
    fetchMockData().then(setMockData)
    fetchData();
  }, []);


  if (!animals) {
    return <div>Loading...</div>
  }
  

  const proprietaires = mockData?.proprietaires || [];

  const getOwner = (proprietaire_id: number) => {
    return proprietaires.find((owner: Proprietaire) => owner.id === proprietaire_id)
  }

  // Filter by search query
  const searchFilteredAnimals = animals.filter((animal: Animal) => {
    if (!searchQuery) {
      return true;
    }

    const owner = getOwner(animal.proprietaire_id);
    const searchLower = searchQuery.toLowerCase();
    
    return (
      animal.nom.toLowerCase().includes(searchLower) ||
      animal.espece.toLowerCase().includes(searchLower) ||
      animal.race.toLowerCase().includes(searchLower) ||
      animal.sexe.toLowerCase().includes(searchLower) ||
      (owner?.nom.toLowerCase().includes(searchLower)) ||
      (owner?.prenom.toLowerCase().includes(searchLower)) ||
      animal.vaccinations?.some((v: Vaccination) => v.nom.toLowerCase().includes(searchLower))
    );
  });

  // Sort based on active filter
  const filteredAnimals = [...searchFilteredAnimals].sort((a: Animal, b: Animal) => {
    console.log(
  'DEBUG sexes:',
  animals.map((a: any) => ({ id: a.id, sexe: a.sexe }))
);

    switch (activeFilter) {
      case 'Sexe':
        // M (Mâle) before F (Femelle)
        return a.sexe.localeCompare(b.sexe);
      case 'Propriétaire':
        const ownerA = getOwner(a.proprietaire_id);
        const ownerB = getOwner(b.proprietaire_id);
        const ownerNameA = `${ownerA?.nom} ${ownerA?.prenom}`;
        const ownerNameB = `${ownerB?.nom} ${ownerB?.prenom}`;
        return ownerNameA.localeCompare(ownerNameB);
      case 'Espèce':
        // Sort by species, then by race
        if (a.espece !== b.espece) {
          return a.espece.localeCompare(b.espece);
        }
        return a.race.localeCompare(b.race);
      case 'Vaccination':
        // Sort alphabetically by vaccine name
        const vacNameA = a.vaccinations?.[0]?.nom || '';
        const vacNameB = b.vaccinations?.[0]?.nom || '';
        return vacNameA.localeCompare(vacNameB);
      default:
        return 0;
    }
  });

  return (
    <div className='container card'>
      <div className='title'>
        <h1><strong style={{ padding: '10px' }}>What's up Doc ? 🐶🐱</strong></h1>
      </div>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      {filteredAnimals.map((animal: Animal) => {
        const proprio = getOwner(animal.proprietaire_id);
        return (
          <div key={animal.id} className='detailcard'> 
            <Link href={`/animal/${animal.id}`}>
              <div className='card-content'>
                {animal.photo && (
                  <img src={animal.photo} className='profilephoto' alt={animal.nom} />
                )}
                <div className='card-info'>
                  <h2>{animal.nom} 🐾</h2>
                    <div>
                      <p><strong>Espèce:</strong> {animal.espece} ({animal.race})</p>
                      <p><strong>Sexe:</strong> {animal.sexe === 'M' ? 'Mâle' : 'Femelle'}</p>
                      <p><strong>Propriétaire:</strong> {proprio?.prenom} {proprio?.nom}</p>
                      {animal.vaccinations && animal.vaccinations.length > 0 && (
                        <p><strong>Vaccination:</strong> {animal.vaccinations.map((v: Vaccination) => v.nom).join(', ')}</p>
                      )}
                    </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      {filteredAnimals.length === 0 && searchQuery && (
        <div className='detailcard'>
          <p style={{ textAlign: 'center', padding: '20px' }}>
           Aucun animal ne correspond à "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  )
}