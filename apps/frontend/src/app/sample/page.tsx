'use client'

import { useEffect, useState } from 'react'

export default function SamplePage() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSample = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/sample')
        const data = await response.json()
        setMessage(data.message)
      } catch (error) {
        console.error('Error fetching sample:', error)
        setMessage('Error connecting to backend')
      } finally {
        setLoading(false)
      }
    }

    fetchSample()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Sample Page
        </h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <p className="text-center text-green-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  )
}