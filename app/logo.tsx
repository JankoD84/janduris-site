/* Wordmark: the favicon's check mark (a passed release check) next to the name.
   Mark colours follow the theme: navy tile + green check in light, light tile + dark check in dark. */
export function Logo({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <span className={"inline-flex items-center gap-2.5 " + className}>
      <span aria-hidden="true" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink">
        <svg viewBox="0 0 32 32" className="h-[1.35rem] w-[1.35rem]">
          <path d="M9 16.5l4.5 4.5L23 11.5" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#56C78E] dark:text-paper" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[1.02rem] font-semibold tracking-[-0.01em] text-ink">Ján Ďuriš</span>
        <span className="mt-1 hidden text-[0.72rem] font-medium text-muted sm:block">QA Automation Engineer</span>
      </span>
    </span>
  );
}
