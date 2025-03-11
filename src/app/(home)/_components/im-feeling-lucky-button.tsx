'use client'

import { Button } from '@/components/ui/button'
import { useQueryParam } from '@/hooks/use-query-param'
import { getCategories } from '@/lib/api/get-categories'
import { tryCatch } from '@/lib/utils'

export function ImFeelingLuckyButton() {
  const { changeParam } = useQueryParam(['category'])

  async function handleClick() {
    const { data: categories } = await tryCatch(() => getCategories())

    const randomCategory = categories?.[Math.floor(Math.random() * categories.length)] || ''

    if (randomCategory) {
      changeParam('category', randomCategory)
    }
  }

  return (
    <Button type="button" variant="link" size="sm" onClick={handleClick}>
      "I'm feeling lucky"
    </Button>
  )
}
