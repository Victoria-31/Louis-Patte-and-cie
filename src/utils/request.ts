import axios from 'axios';

const getAllAnimals = async () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/animals`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getAnimalById = async (id: string) => {
  return axios
  .get(`${process.env.NEXT_PUBLIC_API_URL}/animals/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));
}

const getAllOwners = async () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/owners`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

const getOwnerById = async (id: string) => {
  return axios
  .get(`${process.env.NEXT_PUBLIC_API_URL}/owners/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));
}

const getAllVaccinations = async () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/vaccines`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

const getVaccinationById = async (id: string) => {
  return axios
  .get(`${process.env.NEXT_PUBLIC_API_URL}/vaccines/${id}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));
}

export { getAllAnimals, getAnimalById, getAllOwners, getOwnerById, getAllVaccinations, getVaccinationById };