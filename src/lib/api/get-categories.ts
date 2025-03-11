import type { ICategory } from '@/types/api'

import { ApiEndpoints } from './endpoints'

export async function getCategories(): Promise<ICategory[]> {
  const response = await fetch(ApiEndpoints.getCategories, { cache: 'force-cache' })
  const data = await response.json()

  return data
}
