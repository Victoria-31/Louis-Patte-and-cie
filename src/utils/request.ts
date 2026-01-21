import axios from 'axios';

// faire une fonction pour éviter la répétition de l'URL de base

const getAllItems = async (endpoint: string) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export {  getAllItems };