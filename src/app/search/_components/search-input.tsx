'use client'

import { useDebounceCallback } from 'usehooks-ts'

import { Input } from '@/components/ui/input'
import { useQueryParam } from '@/hooks/use-query-param'

export function SearchInput() {
  const { paramValues, changeParam, deleteParam } = useQueryParam(['query'])

  const query = paramValues.query || ''

  const debounced = useDebounceCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim()
    if (value === '') return deleteParam('query')
    return changeParam('query', value)
  }, 500)

  return (
    <Input
      defaultValue={query}
      onChange={debounced}
      placeholder="Search for a joke"
      className="h-12 rounded-full px-4 py-2"
    />
  )
}
