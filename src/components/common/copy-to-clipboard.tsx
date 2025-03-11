'use client'

import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard'

import { Button } from '@/components/ui/button'

interface CopyToClipboardProps {
  text: string
}

export function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000)
    }
  }, [copied])

  function handleCopy() {
    setCopied(true)
  }

  return (
    <ReactCopyToClipboard text={text} onCopy={handleCopy}>
      <Button aria-label="Copy" title="Copy" type="button" variant="ghost" size="icon">
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </ReactCopyToClipboard>
  )
}
