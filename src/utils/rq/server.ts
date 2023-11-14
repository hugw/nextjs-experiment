import { API_URL } from '@/config'

import { RqOptions, rq } from './rq'

export const query = async <TResponse, TVariables = void>(
  opts: RqOptions<TVariables>,
) => {
  const token = ''

  return rq<TResponse, TVariables>({
    ...opts,
    baseUrl: API_URL,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
