'use client'

import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useQueryParam } from '@/hooks/use-query-param'
import type { ICategory } from '@/types/api'

const CATEGORY_EMOJI_MAPPING: Record<string, string> = {
  animal: '🐶',
  career: '💼',
  celebrity: '👨‍🎤',
  dev: '👨‍💻',
  explicit: '🔞',
  fashion: '👗',
  food: '🍔',
  history: '📓',
  money: '💰',
  movie: '🎥',
  music: '🎵',
  politics: '👨‍💼',
  religion: '🕊️',
  science: '🔬',
  sport: '⚽️',
  travel: '🌎',
}

interface CategoryItemProps {
  category: ICategory
}

export function CategoryItem({ category }: CategoryItemProps) {
  const { paramValues } = useQueryParam(['category'])

  const selected = paramValues.category === category

  const emoji = CATEGORY_EMOJI_MAPPING[category]

  return (
    <Badge asChild variant={selected ? 'default' : 'outline'} className="rounded-full px-3 py-1">
      <Link href={`/?category=${category}`} scroll={false}>
        <span>{emoji ?? '👀'}</span> {category}
      </Link>
    </Badge>
  )
}

export function CategoryItemSkeleton() {
  return <Skeleton className="h-6 min-w-[100px] rounded-full px-3 py-1" />
}
