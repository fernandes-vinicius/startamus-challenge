'use client' // Error boundaries must be Client Components

import { RefreshCwIcon } from 'lucide-react'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col space-y-1.5 p-6 text-center">
          <h2 className="font-semibold text-xl tracking-tight">Something went wrong</h2>
          <p className="text-muted-foreground text-sm">{error?.message}</p>
        </div>

        <div className="flex justify-center p-6 pt-0">
          <Button type="button" variant="outline" onClick={() => reset()}>
            <RefreshCwIcon /> Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}
