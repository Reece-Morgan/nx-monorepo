import { getMovies } from '../../api/movie-api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function movies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getMovies(req, res, req.query.search as string);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: getErrorMessage(error),
    });
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}
