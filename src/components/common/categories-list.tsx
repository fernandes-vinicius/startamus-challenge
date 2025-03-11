import { CategoryItem, CategoryItemSkeleton } from '@/components/common/category-item'
import { getCategories } from '@/lib/api/get-categories'
import { tryCatch } from '@/lib/utils'

export async function CategoriesList() {
  const { data: categories, error } = await tryCatch(() => getCategories())

  if (error) {
    return null
  }

  return (
    <ul className="relative flex items-center justify-center gap-4 overflow-x-auto px-[7%] pb-2 sm:flex-wrap sm:overflow-x-hidden sm:pb-0">
      {categories?.map((category) => (
        <li key={category} className="inline-flex">
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  )
}

export function CategoriesListSkeleton() {
  return (
    <ul className="relative flex flex-wrap items-center justify-center gap-4 px-[7%]">
      {Array.from({ length: 8 }).map((_, i) => (
        <li key={i.toString()}>
          <CategoryItemSkeleton />
        </li>
      ))}
    </ul>
  )
}
