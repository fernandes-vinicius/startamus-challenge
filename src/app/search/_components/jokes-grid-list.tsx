import { searchJoke } from '@/lib/api/search-joke'
import { tryCatch } from '@/lib/utils'

import { JokeCardItem, JokeCardItemSkeleton } from './joke-card-item'

interface JokesGridListProps {
  query: string
}

export async function JokesGridList({ query }: JokesGridListProps) {
  const { data } = await tryCatch(() => searchJoke(query))

  const total = data?.total ?? 0
  const jokes = data?.result ?? []

  return (
    <div className="-mt-8 space-y-14 px-4">
      {!query && jokes.length === 0 && (
        <div className="flex w-full flex-col items-center justify-center py-14">
          <p className="text-center text-muted-foreground text-xs">Type something to search</p>
        </div>
      )}

      {!!query && (
        <p className="text-muted-foreground text-xs">
          {total} results for <strong>&quot;{query}&quot;</strong>
        </p>
      )}

      <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-9">
        {jokes.map((joke) => (
          <li key={joke.id} className="flex w-full">
            <JokeCardItem joke={joke} query={query} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function JokesGridListSkeleton() {
  return (
    <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-9">
      {Array.from({ length: 8 }).map((_, i) => (
        <li key={i.toString()} className="inline-flex w-full">
          <JokeCardItemSkeleton />
        </li>
      ))}
    </ul>
  )
}
