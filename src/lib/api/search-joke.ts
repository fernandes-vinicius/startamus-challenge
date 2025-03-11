import type { IJoke } from '@/types/api'

import { ApiEndpoints } from './endpoints'

type ResponseData = {
  total: number
  result: IJoke[]
}

export async function searchJoke(query: string): Promise<ResponseData> {
  const response = await fetch(ApiEndpoints.searchJoke(query))
  const data = await response.json()

  return data
}
