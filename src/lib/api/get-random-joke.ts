import type { IJoke } from '@/types/api'

import { ApiEndpoints } from './endpoints'

export async function getRandomJoke(category = ''): Promise<IJoke> {
  const response = await fetch(ApiEndpoints.getRandomJoke(category))
  const data = await response.json()

  return data
}
