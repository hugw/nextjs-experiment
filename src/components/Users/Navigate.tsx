'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { ROUTES } from '@/config'

export const Navigate = ({
  page,
  children,
}: {
  page: number
  children: React.ReactNode
}) => {
  const router = useRouter()

  return (
    <button
      className="text-emerald-600 font-bold"
      onClick={() => router.push(`${ROUTES.users}?page=${page}`)}
    >
      {children}
    </button>
  )
}
