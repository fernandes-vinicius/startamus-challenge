import { MoreHorizontalIcon } from 'lucide-react'
import Image from 'next/image'

import { AnimatedText } from '@/components/common/animated-text'
import { CopyToClipboard } from '@/components/common/copy-to-clipboard'
import { getRandomJoke } from '@/lib/api/get-random-joke'
import { tryCatch } from '@/lib/utils'

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
      {/* <Image src={joke.icon_url} alt="Chuck Norris" width={60} height={60} /> */}
      <Image src="/images/chuck_norris.png" alt="Chuck Norris" width={48} height={48} className="rounded-full" />
      <div className="mt-14 flex max-w-md flex-col items-start rounded-3xl rounded-tl-none border bg-primary/10 p-4 text-center shadow-sm">
        <AnimatedText sequence={joke.value} className="text-base leading-relaxed" />
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
      <Image src="/images/chuck_norris.png" alt="Chuck Norris" width={60} height={60} className="rounded-full" />
      <div className="mt-24 flex max-w-md items-start rounded-3xl rounded-tl-none border bg-primary/10 p-4 text-center shadow-sm sm:mt-14 sm:p-8">
        <MoreHorizontalIcon className="size-6 animate-bounce" />
      </div>
    </div>
  )
}
