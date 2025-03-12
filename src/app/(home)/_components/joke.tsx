import { MoreHorizontalIcon } from 'lucide-react'
import Image from 'next/image'

import { AnimatedText } from '@/components/common/animated-text'
import { CopyToClipboard } from '@/components/common/copy-to-clipboard'
import { getRandomJoke } from '@/lib/api/get-random-joke'
import { formateDate, tryCatch } from '@/lib/utils'

interface JokeProps {
  category: string
}

export async function Joke({ category }: JokeProps) {
  const { data: joke, error } = await tryCatch(() => getRandomJoke(category))

  if (error) {
    return null
  }

  return (
    <div className="flex items-start sm:gap-2">
      <Image
        // src={joke.icon_url}
        src="/images/chuck_norris.png"
        alt="Chuck Norris"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
      <div className="mt-14 flex w-full max-w-md flex-col items-start gap-1 rounded-3xl rounded-tl-none border bg-primary/10 p-4 text-center shadow-sm">
        <span data-testid="joke-value" className="sr-only">
          {joke.value}
        </span>
        <AnimatedText sequence={`"${joke.value}"`} className="text-base leading-relaxed" />
        <span className="w-full text-center text-muted-foreground text-xs">{formateDate(joke.updated_at)}</span>
        <div className="flex w-full justify-end">
          <CopyToClipboard text={joke.value} />
        </div>
      </div>
    </div>
  )
}

export async function JokeSkeleton() {
  return (
    <div className="flex items-start sm:gap-10">
      <Image
        src="/images/chuck_norris.png"
        alt="Chuck Norris"
        width={60}
        height={60}
        className="h-12 w-12 object-contain"
      />
      <div className="mt-24 flex max-w-md items-start rounded-3xl rounded-tl-none border bg-primary/10 p-4 text-center shadow-sm sm:mt-14 sm:p-8">
        <MoreHorizontalIcon className="size-6 animate-bounce" />
      </div>
    </div>
  )
}
