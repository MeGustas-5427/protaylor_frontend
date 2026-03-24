import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-on-background">
      <span className="mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
        Design Route Missing
      </span>
      <h1 className="font-headline text-5xl font-bold italic text-primary">Not Found</h1>
      <p className="mt-6 max-w-xl text-on-surface-variant">
        This route is outside the approved Stitch export set for the current high-fidelity rebuild.
      </p>
      <Link href="/" className="mt-8 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-primary">
        Back to Homepage
      </Link>
    </main>
  )
}
