'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export const Back = () => {
  const router = useRouter()

  return (
    <button
      className="text-emerald-600 font-bold"
      onClick={() => router.back()}
    >
      Back to all users
    </button>
  )
}
