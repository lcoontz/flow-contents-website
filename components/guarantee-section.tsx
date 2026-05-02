export function GuaranteeSection() {
  return (
    <section id="guarantee" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-white p-10 shadow-lg sm:p-14">
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div>
                <div className="fc-eyebrow">The Guarantee</div>
                <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
                  72 hours. Best list you've ever seen. Or your money back.
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Card
                title="Late = full refund"
                body="If we don't deliver your complete, carrier-ready report within 72 hours of photo handoff, you get every dollar back. No prorating. No clauses."
              />
              <Card
                title="Not the best list you've seen?"
                body="Open the file. If it isn't sharper, more complete, and more defensible than any contents list you've ever filed — you just have to tell us how to make it better. We fix it. If we still can't get it there, full refund. Your sole judgment."
              />
            </div>

            <p className="mt-8 text-[14px] leading-relaxed text-slate-600">
              No forms. No back-and-forth. Email Leland and we either fix it or refund it the
              same day. We built the process to deliver — and we eat the cost when it doesn't.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <div>
          <h3 className="text-[15px] font-semibold tracking-tight text-slate-900">{title}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{body}</p>
        </div>
      </div>
    </div>
  )
}
