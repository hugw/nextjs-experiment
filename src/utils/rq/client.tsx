'use client'

import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation as useRMutation,
  useQuery as useRQuery,
} from '@tanstack/react-query'

import { API_URL } from '@/config'

import { RqError, RqOptions, rq } from './rq'

export function useQuery<TResponse, TVariables = void>(
  opts: UseQueryOptions<TResponse>,
  queryOpts: RqOptions<TVariables>,
) {
  return useRQuery<TResponse>({
    ...opts,
    queryKey: opts.queryKey,
    queryFn: async (): Promise<TResponse> => {
      const accessToken = ''
      const { data, error } = await rq<TResponse, TVariables>({
        ...queryOpts,
        baseUrl: API_URL,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })

      if (error) {
        const err: RqError = new Error(error.message)
        err.response = error
        throw err
      }

      return data!
    },
  })
}

export function useMutation<TResponse, TVariables = void>(
  opts: UseMutationOptions<TResponse, unknown, TVariables>,
  mutationOpts: RqOptions<TVariables>,
) {
  return useRMutation<TResponse, unknown, TVariables>({
    ...opts,
    mutationFn: async (variables: TVariables): Promise<TResponse> => {
      const accessToken = ''
      const { data, error } = await rq<TResponse, TVariables>({
        ...mutationOpts,
        ...(variables && { data: variables }),
        baseUrl: API_URL,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })

      if (error) {
        const err: RqError = new Error(error.message)
        err.response = error
        throw err
      }

      return data!
    },
  })
}
