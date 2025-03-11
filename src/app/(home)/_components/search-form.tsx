import { Input } from '@/components/ui/input'

export function SearchForm() {
  return (
    <form action="/search">
      <Input id="query" name="query" placeholder="What are you looking for?" className="h-14 rounded-full px-6" />
    </form>
  )
}
