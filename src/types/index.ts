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
    picture: string | null;
    weight: string;
    gender: 'M' | 'F';

    owner: {
      ownerId: string;
      userId: string;
      name: string;
      phone: string;
      address: string;
      createdAt: string;
      updatedAt: string;
    };

    vaccines: ApiVaccine[];
    visits: ApiVisit[];

    createdAt: string;
    updatedAt: string;
  };
}

export interface ApiVaccine {
  vaccineId: string;
  name: string;
  administrationDate: string;
  vaccineStatus: string;
  reminderDelays: number[];
  veterinarianId: string;
  animalId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiVisit {
  visitId: string;
  date: string;
  reason: string;
  visitStatus: string;
  observation: string;
  animalId: string;
  veterinarianId: string;
  createdAt: string;
  updatedAt: string;
}



export interface ApiVaccination {
  id: string;
  attributes: {
    name: string;
    administrationDate: string;
    reminderDelays: number[];
    createdAt: string;
    updatedAt: string;
  };
}

export interface ApiOwner {
  id: string;
  attributes: {
    name: string;
    phone: string;
    user: {
      email: string;
  };
}
}

export interface ApiVisit {
  id: string;
  attributes: {
    date: string;
    reason: string;
    observation: string;
    createdAt: string;
    updatedAt: string;
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

export interface AuthProps {
  role: string;
  setRole: (role: string) => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}