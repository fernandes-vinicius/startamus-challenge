import { beforeAll, describe, expect, it, vi } from 'vitest'

import { searchJoke } from '@/lib/api/search-joke'

beforeAll(() => {
  global.fetch = vi.fn()
})

describe('SearchJoke', () => {
  it('should return data', async () => {
    const mockJokes = {
      total: 1,
      result: [
        {
          categories: [],
          created_at: '2020-01-05 13:42:25.099703',
          icon_url: 'https://api.chucknorris.io/img/avatar/chuck-norris.png',
          id: 'fcO-aJV0Qjy2kAa6z_gsEg',
          updated_at: '2020-01-05 13:42:25.099703',
          url: 'https://api.chucknorris.io/jokes/fcO-aJV0Qjy2kAa6z_gsEg',
          value: 'In the 1980s, Chuck Norris dry fired a gun eastward. The result was the Chernobyl Incident',
        },
      ],
    }

    const mockQuery = 'Chuck'

    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => mockJokes,
    } as Response)

    const response = await searchJoke(mockQuery)

    expect(fetch).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/search?query=Chuck')

    expect(response).toEqual(mockJokes)

    expect(response.total).toBe(1)

    expect(response.result.length).toBe(1)

    expect(response.result[0].value).toBe(
      'In the 1980s, Chuck Norris dry fired a gun eastward. The result was the Chernobyl Incident',
    )
  })
})
