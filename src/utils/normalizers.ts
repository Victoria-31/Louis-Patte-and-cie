import type { ApiAnimal, ApiOwner, ApiVaccination, ApiVisit } from '../types';

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

  vaccinations: item.attributes.vaccines?.map(v => ({
    id: v.vaccineId,
    nom: v.name,
    date: v.administrationDate,
    rappel: v.reminderDelays,
  })) ?? [],

  historique: item.attributes.visits?.map(v => ({
    id: v.visitId,
    date: v.date,
    motif: v.reason,
    notes: v.observation,
  })) ?? [],
});

export const normalizeOwner = (item: ApiOwner) => ({
  id: item.id,
  nom: item.attributes.name,
  telephone: item.attributes.phone,
  email: item.attributes.user.email,
});   

// export const normalizeVaccination = (item: ApiVaccination) => ({
//   id: item.id,
//   nom: item.attributes.name,
//   date: item.attributes.administrationDate,
//   rappel: item.attributes.reminderDelays,
// });

// export const normalizeVisit = (item: ApiVisit) => ({
//   id: item.id,
//   date: item.attributes.date,
//   motif: item.attributes.reason,
//   notes: item.attributes.observation,
// });