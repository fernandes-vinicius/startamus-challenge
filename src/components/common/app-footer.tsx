import Link from 'next/link'

import { Button } from '@/components/ui/button'

const portfolioUrl = 'https://vinicius-frontend.vercel.app'

export function AppFooter() {
  return (
    <footer className="flex w-full items-center justify-between border-t px-4 py-3 sm:px-10">
      <p className="text-muted-foreground text-xs">&copy; {new Date().getFullYear()} All rights reserved</p>
      <Button asChild variant="link" size="sm">
        <Link aria-label="Portfolio" target="_blank" rel="noopener noreferrer" href={portfolioUrl}>
          Portfolio
        </Link>
      </Button>
    </footer>
  )
}
