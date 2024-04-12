import { NextApiRequest, NextApiResponse } from 'next';

const apiKey = '5fd15d12';

export async function callApiRoute(endpoint: string) {
  const res = fetch(
    `/api/${endpoint}`
  );

  const response = (await res).json();

  return response;
}

export const getMovies = async (req: NextApiRequest, res: NextApiResponse, search: string) => {
  const data = await fetch(
    `https://www.omdbapi.com/?s=${search}&type=movie&apiKey=${apiKey}`
  );

  const response = await data.json();

  return response;
};

export const getAdvancedSearch = async (req: NextApiRequest, res: NextApiResponse, search: string) => {
  const data = await fetch(
    `https://www.omdbapi.com/?s=${search}&apiKey=${apiKey}`
  );

  const response = await data.json();

  return response;
};
