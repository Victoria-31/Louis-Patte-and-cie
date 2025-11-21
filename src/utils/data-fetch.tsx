import type { MockData } from '../types'

// Client-side data fetching
export async function fetchMockData(): Promise<MockData> {
  try {
    const response = await fetch('/data/mockData.json')
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching mock data:', error)
    throw error
  }
}

