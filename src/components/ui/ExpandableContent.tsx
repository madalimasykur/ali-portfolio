'use client'

import { useId, useState, type ReactNode } from 'react'
import Button from '@/components/ui/Button'

type ExpandableContentProps = {
  preview: string
  label: string
  children: ReactNode
}

export default function ExpandableContent({ preview, label, children }: ExpandableContentProps) {
  const [expanded, setExpanded] = useState(false)
  const contentId = useId()

  return (
    <div>
      <div className="expandable-panel" data-open={!expanded} aria-hidden={expanded}>
        <div className="min-h-0 overflow-hidden">
          <p className="line-clamp-3 body-copy text-(--color-soft)">{preview}</p>
        </div>
      </div>
      <div
        id={contentId}
        className="expandable-panel"
        data-open={expanded}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-6">{children}</div>
        </div>
      </div>
      <Button
        variant="text"
        aria-expanded={expanded}
        aria-controls={contentId}
        aria-label={`${expanded ? 'Show less' : 'Show more'} about ${label}`}
        onClick={() => setExpanded((current) => !current)}
        className="mt-4"
      >
        {expanded ? 'Show less' : 'Show more'}
      </Button>
    </div>
  )
}
