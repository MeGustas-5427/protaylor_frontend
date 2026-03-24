'use client'

import { useState, useTransition } from 'react'

type QuoteFormProps = {
  variant?: 'contact' | 'compact'
  buttonLabel?: string
}

export function QuoteForm({
  variant = 'contact',
  buttonLabel = 'Request Factory Quote',
}: QuoteFormProps) {
  const [state, setState] = useState<'idle' | 'success'>('idle')
  const [pending, startTransition] = useTransition()
  const isCompact = variant === 'compact'

  return (
    <form
      className={isCompact ? 'space-y-5' : 'space-y-8'}
      onSubmit={(event) => {
        event.preventDefault()
        startTransition(() => {
          setState('success')
        })
      }}
    >
      <div className={`grid gap-6 ${isCompact ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
        <div className="space-y-2">
          <label className="label-caps text-[10px] text-secondary" htmlFor="quote-name">
            Full Name
          </label>
          <input
            id="quote-name"
            className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
            placeholder="Johnathan Sterling"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label className="label-caps text-[10px] text-secondary" htmlFor="quote-company">
            Company
          </label>
          <input
            id="quote-company"
            className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
            placeholder="Precision Industries Ltd."
            type="text"
          />
        </div>
      </div>

      <div className={`grid gap-6 ${isCompact ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
        <div className="space-y-2">
          <label className="label-caps text-[10px] text-secondary" htmlFor="quote-email">
            Business Email
          </label>
          <input
            id="quote-email"
            className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
            placeholder="j.sterling@company.com"
            type="email"
          />
        </div>
        <div className="space-y-2">
          <label className="label-caps text-[10px] text-secondary" htmlFor="quote-country">
            Country / Region
          </label>
          <input
            id="quote-country"
            className="w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
            placeholder="Germany"
            type="text"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="label-caps text-[10px] text-secondary" htmlFor="quote-requirements">
          Requirements
        </label>
        <textarea
          id="quote-requirements"
          className="min-h-36 w-full rounded-lg border-none bg-surface-container-low p-4 text-on-surface placeholder:text-stone-400 focus:ring-2 focus:ring-primary/20"
          placeholder="Tell us about throughput goals, preferred machine type, OEM needs, and destination market."
        />
      </div>

      {!isCompact ? (
        <div className="rounded-xl bg-secondary-container px-5 py-4 text-sm text-on-secondary-container">
          <p className="font-bold">OEM / ODM support available</p>
          <p className="mt-1 text-sm/6 opacity-80">
            We can align branding, electrical configuration, finish options, and shipment
            documentation for qualified wholesale programs.
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary-dim disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? 'Sending Request...' : buttonLabel}
      </button>

      <p className="text-xs italic text-outline">
        {state === 'success'
          ? 'Your request has been staged locally for preview. Backend submission will be wired in the next phase.'
          : 'Average engineering response time: within 4 business hours.'}
      </p>
    </form>
  )
}
