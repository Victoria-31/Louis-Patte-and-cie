import axios from 'axios';

const getAllAnimals = async () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/animals`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getAllAnimals };