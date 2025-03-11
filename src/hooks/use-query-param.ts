'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useQueryParam<T extends string>(paramKeys: T[]) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const paramValues = paramKeys.reduce(
    (acc, paramKey) => {
      acc[paramKey] = searchParams.get(paramKey)
      return acc
    },
    {} as Record<T, string | null>,
  )

  function changeParam(param: T | string, value: string, options?: { scroll?: boolean }) {
    const params = new URLSearchParams(searchParams.toString())

    if (params.get(param) === value) return

    params.set(param, value)

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: options?.scroll !== undefined ? options.scroll : false,
    })
  }

  function changeParams(
    values: Partial<Record<T, string | undefined>> & Record<string, string | undefined>,
    options?: { scroll?: boolean },
  ) {
    const params = new URLSearchParams(searchParams.toString())

    const entries = Object.entries(values)

    for (const [param, value] of entries) {
      if (value === undefined || value === 'undefined' || value === null) {
        if (params.get(param)) {
          params.delete(param)
        }

        continue
      }

      params.set(param, value as string)
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: options?.scroll !== undefined ? options.scroll : false })
  }

  function deleteParam(param: T) {
    const params = new URLSearchParams(searchParams.toString())

    if (!params.get(param)) return

    params.delete(param)

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  function deleteAllParams() {
    const params = new URLSearchParams()

    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return { paramValues, changeParam, changeParams, deleteParam, deleteAllParams }
}
