'use client'

import { useQuery } from '@/utils/rq/client'

export const useGetStatus = () => {
  const URL = '/api/status'

  return useQuery(
    {
      queryKey: [URL],
    },
    {
      method: 'GET',
      path: URL,
    },
  )
}
