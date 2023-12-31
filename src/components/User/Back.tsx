'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { ROUTES } from '@/config'

export const Back = () => {
  const router = useRouter()

  return (
    <button
      className="text-emerald-600 font-bold"
      onClick={() => router.push(ROUTES.users)}
    >
      Back to all users
    </button>
  )
}
