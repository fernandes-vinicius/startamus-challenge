import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Success<T> = { data: T; error: null }
type Failure<E> = { data: null; error: E }
type Result<T, E = Error> = Success<T> | Failure<E>

export async function tryCatch<T, E = Error>(fn: () => Promise<T>): Promise<Result<T, E>> {
  try {
    const data = await fn()
    return { data, error: null }
  } catch (error) {
    return { data: null, error: error as E }
  }
}

export function formateDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function highlightSearchTerm(text: string, query = '') {
  if (!query) return text

  const regex = new RegExp(`(${query})`, 'gi') // "gi" for case insensitive

  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <span key={i.toString()} className="rounded bg-yellow-300 px-1 dark:bg-yellow-500 dark:text-black">
        {part}
      </span>
    ) : (
      part
    ),
  )
}
