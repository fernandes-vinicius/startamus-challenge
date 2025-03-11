import { env } from '@/lib/env'

const baseUrl = env.NEXT_PUBLIC_API_URL

export const ApiEndpoints = {
  getRandomJoke: (category?: string) => {
    return category ? `${baseUrl}/jokes/random?category=${category}` : `${baseUrl}/jokes/random`
  },
  searchJoke: (query: string) => `${baseUrl}/jokes/search?query=${query}`,
  getCategories: `${baseUrl}/jokes/categories`,
}
