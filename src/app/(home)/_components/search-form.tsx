import { Input } from '@/components/ui/input'

export function SearchForm() {
  return (
    <form action="/search">
      <Input
        data-testid="query-input"
        name="query"
        placeholder="What are you looking for?"
        className="h-14 rounded-full px-6"
      />
    </form>
  )
}
