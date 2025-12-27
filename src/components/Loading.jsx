import React from 'react'

export default function Loading() {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4 animate-pulse">Loading the galaxy...</div>
        <div className="w-24 h-24 rounded-full border-4 border-t-transparent border-white/20 mx-auto animate-spin" />
      </div>
    </div>
  )
}
