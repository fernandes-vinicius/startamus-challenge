import Image from 'next/image'
import Link from 'next/link'

import { ThemeToggle } from '@/components/common/theme-toggle'
import { Button } from '@/components/ui/button'

const repositoryUrl = 'https://github.com/fernandes-vinicius/startamus-challenge'

export function AppHeader() {
  return (
    <header className="relative top-0 z-20 flex h-24 w-full items-center justify-between px-10">
      <Link href="/" aria-label="Go To Home">
        <Image src="/images/chuck_norris.png" alt="Chuck Norris" width={32} height={32} />
      </Link>

      <div className="flex items-center gap-1">
        <ThemeToggle />
        <Button asChild aria-label="Open repository" variant="link" size="sm">
          <Link target="_blank" rel="noopener noreferrer" href={repositoryUrl}>
            GitHub
          </Link>
        </Button>
      </div>
    </header>
  )
}
