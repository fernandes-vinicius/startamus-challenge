import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { highlightSearchTerm } from '@/lib/utils'

describe('highlightSearchTerm', () => {
  const TestComponent = ({ text, searchTerm }: { text: string; searchTerm: string }) => (
    <div>{highlightSearchTerm(text, searchTerm)}</div>
  )

  it('should highlight the search term in the joke', () => {
    const { container } = render(<TestComponent text="Chuck Norris can divide by zero." searchTerm="Chuck" />)

    const highlightedText = container.querySelector('span')

    expect(highlightedText?.textContent).toBe('Chuck')
  })

  it('should not highlight the search term if it is not in the joke', () => {
    const { container } = render(<TestComponent text="Chuck Norris can divide by zero." searchTerm="Duck" />)

    const highlightedText = container.querySelector('span')

    expect(highlightedText).toBeNull()
  })

  it('should return the original joke if the search term is not found', () => {
    const { container } = render(<TestComponent text="Chuck Norris can divide by zero." searchTerm="" />)

    expect(container.textContent).toBe('Chuck Norris can divide by zero.')
  })
})
