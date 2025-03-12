import Image from 'next/image'

import { CopyToClipboard } from '@/components/common/copy-to-clipboard'
import { Skeleton } from '@/components/ui/skeleton'
import { formateDate, highlightSearchTerm } from '@/lib/utils'
import type { IJoke } from '@/types/api'

interface JokeCardItemProps {
  joke: IJoke
  query: string
}

export function JokeCardItem({ joke, query }: JokeCardItemProps) {
  const highlightedJoke = highlightSearchTerm(joke.value, query)

  return (
    <div className="relative flex w-full flex-col items-center justify-center rounded-3xl border p-10 text-center">
      <Image
        src={joke.icon_url}
        alt="Chuck Norris"
        width={48}
        height={48}
        className="-translate-x-1/2 -top-6 absolute left-1/2"
      />
      <p className="mt-4 mb-2 max-w-2xl font-light text-primary text-xs leading-relaxed sm:text-sm">
        {highlightedJoke}
      </p>
      <span className="text-center text-muted-foreground text-xs">{formateDate(joke.updated_at)}</span>
      <CopyToClipboard text={joke.value} />
    </div>
  )
}

export function JokeCardItemSkeleton() {
  return <Skeleton className="h-60 w-full" />
}
