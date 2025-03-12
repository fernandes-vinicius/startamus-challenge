'use client'

import { Button } from '@/components/ui/button'
import { useQueryParam } from '@/hooks/use-query-param'

import { randomCategoryAction } from '../_actions/random-category-action'

export function ImFeelingLuckyButton() {
  const { changeParam } = useQueryParam(['category'])

  async function handleClick() {
    const randomCategory = await randomCategoryAction()

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
