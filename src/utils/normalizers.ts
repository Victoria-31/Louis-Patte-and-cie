import type { ApiAnimal, ApiOwner, ApiVaccination } from '../types';

export const normalizeAnimal = (item: ApiAnimal) => ({
  id: item.id,
  nom: item.attributes.name,
  espece: item.attributes.species,
  race: item.attributes.breed,
  dateNaissance: item.attributes.dateOfBirth,
  poids: item.attributes.weight,
  sexe: item.attributes.gender,
  photo: item.attributes.picture,
  proprietaire_id: item.attributes.owner.ownerId,
  vaccinations: item.attributes.vaccines ?? [],
  historique: item.attributes.visits ?? [],
});


export const normalizeOwner = (item: ApiOwner) => ({
  id: item.id,
  nom: item.attributes.name,
  telephone: item.attributes.phone,
  email: item.attributes.user.email,
});   

export const normalizeVaccination = (item: ApiVaccination) => ({
  nom: item.attributes.name,
  date: item.attributes.administrationDate,
  rappel: item.attributes.reminderDelays,
});