import React from 'react'

import { Providers } from './Providers'

type AppProps = {}

export const App = async ({ children }: React.PropsWithChildren<AppProps>) => {
  return (
    <main>
      <Providers>{children}</Providers>
    </main>
  )
}
