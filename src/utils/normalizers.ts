import type { ApiAnimal } from '../types';

export const normalizeAnimal = (item: ApiAnimal) => ({
  id: item.id,
  nom: item.attributes.name,
  espece: item.attributes.species,
  race: item.attributes.breed,
  dateNaissance: item.attributes.dateOfBirth,
  poids: item.attributes.weight,
  sexe: item.attributes.gender,
  photo: item.attributes.picture,
  proprietaire: item.attributes.owner,
  vaccinations: item.attributes.vaccines ?? [],
  historique: item.attributes.visits ?? [],
});
