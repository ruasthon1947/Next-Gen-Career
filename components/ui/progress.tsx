import * as React from 'react'

type ProgressBarProps = {
  value: number
  className?: string
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div className={`relative h-2 w-full bg-primary/20 rounded-full overflow-hidden ${className || ''}`}>
      <div
        className="bg-primary h-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}