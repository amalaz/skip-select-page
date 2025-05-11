import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Skip } from '@/types/skip';
import { getSkipsUrl } from '@/config/api';

export class SkipError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'SkipError';
  }
}

export function useSkips() {
  return useQuery<Skip[], SkipError>({
    queryKey: ['skips'],
    queryFn: async () => {
      try {
        const res = await axios.get<Skip[]>(getSkipsUrl());
        return res.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new SkipError(
            error.response?.data?.message || 'Failed to fetch skips',
            error.response?.status
          );
        }
        throw new SkipError('An unexpected error occurred');
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
} 