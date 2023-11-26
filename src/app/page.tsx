import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'

export default async function HomePage() {
  redirect(ROUTES.users)
}
