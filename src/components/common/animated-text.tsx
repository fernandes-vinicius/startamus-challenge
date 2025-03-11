'use client'

import { TypeAnimation } from 'react-type-animation'

import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  sequence: string
  repeat?: number
  className?: string
}

export function AnimatedText({ sequence, repeat, className }: AnimatedTextProps) {
  return (
    <TypeAnimation
      sequence={[sequence, 1000]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      className={cn('inline-block', className)}
      repeat={repeat}
    />
  )
}
