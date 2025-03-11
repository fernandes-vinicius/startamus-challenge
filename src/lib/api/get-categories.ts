import type { ICategory } from '@/types/api'

import { ApiEndpoints } from './endpoints'

export async function getCategories(): Promise<ICategory[]> {
  const response = await fetch(ApiEndpoints.getCategories)
  const data = await response.json()

  return data
}
