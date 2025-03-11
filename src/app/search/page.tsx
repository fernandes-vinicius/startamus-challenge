import { ChevronLeftIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

import { Button } from '@/components/ui/button'
import type { SearchParams } from '@/types/common'

import { JokesGridList, JokesGridListSkeleton } from './_components/jokes-grid-list'
import { SearchInput } from './_components/search-input'

interface SearchPageProps {
  searchParams: SearchParams
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { query } = await searchParams

  if (query) {
    return {
      title: query.toString(),
    }
  }

  return {
    title: 'Search',
  }
}

export default async function SearchPage(props: SearchPageProps) {
  const searchParams = await props.searchParams

  const query = searchParams.query?.toString() || ''

  return (
    <main className="container mx-auto flex-1 px-6">
      <div className="flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
        <Button asChild aria-label="Back to Home" variant="link" size="sm" className="mb-2">
          <Link href="/">
            <ChevronLeftIcon /> Back
          </Link>
        </Button>

        <h1 className="px-4 font-bold text-2xl leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]">
          Search
        </h1>

        <div className="mt-2 w-full space-y-2 px-4">
          <div className="sm: w-full max-w-sm">
            <SearchInput />
          </div>
        </div>

        <div className="mt-10 w-full">
          <Suspense key={query} fallback={<JokesGridListSkeleton />}>
            <JokesGridList query={query} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
