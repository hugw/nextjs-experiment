'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

const queryOptions = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
}

type ProviderProps = {}

export const Providers = ({
  children,
}: React.PropsWithChildren<ProviderProps>) => {
  const [queryClient] = useState(() => new QueryClient(queryOptions))
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
