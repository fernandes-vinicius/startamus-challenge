'use server'

import { getCategories } from '@/lib/api/get-categories'
import { tryCatch } from '@/lib/utils'

export async function randomCategoryAction() {
  const { data: categories } = await tryCatch(() => getCategories())

  const randomCategory = categories?.[Math.floor(Math.random() * categories.length)]

  return randomCategory
}
