export interface Vaccination {
  nom: string;
  date: string;
  rappel: string;
}

export interface Historique {
  date: string;
  motif: string;
  notes: string;
}

export interface Animal {
  id: number;
  nom: string;
  espece: string;
  race: string;
  date_naissance: string;
  poids: number;
  sexe: string;
  allergies: string | null;
  photo: string;
  proprietaire_id: number;
  vaccinations: Vaccination[];
  historique: Historique[];
}

export interface ApiAnimal {
  id: string;
  attributes: {
    name: string;
    species: string;
    breed: string;
    dateOfBirth: string;
    weight: number;
    gender: 'M' | 'F';
    picture: string | null;
    owner: Proprietaire;
    vaccines: Vaccination[];
    visits: Historique[];
  };
}


export interface Proprietaire {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
}

export interface MockData {
  animaux: Animal[];
  proprietaires: Proprietaire[];
}
