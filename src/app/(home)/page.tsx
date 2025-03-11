import type { Metadata } from 'next'
import { Suspense } from 'react'

import { CategoriesList, CategoriesListSkeleton } from '@/components/common/categories-list'
import type { SearchParams } from '@/types/common'

import { HeroSection } from './_components/hero-section'
import { Joke, JokeSkeleton } from './_components/joke'

interface HomePageProps {
  searchParams: SearchParams
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function HomePage(props: HomePageProps) {
  const searchParams = await props.searchParams

  const category = searchParams.category?.toString() || ''

  return (
    <main className="container mx-auto flex-1 md:px-6">
      <HeroSection />
      <Suspense fallback={<CategoriesListSkeleton />}>
        <CategoriesList />
      </Suspense>
      <section className="flex w-full justify-center px-[7%] py-8">
        <Suspense key={category} fallback={<JokeSkeleton />}>
          <Joke category={category} />
        </Suspense>
      </section>
    </main>
  )
}
