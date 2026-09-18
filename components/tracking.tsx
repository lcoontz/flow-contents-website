import Script from "next/script"

/**
 * Visitor tracking for the marketing site.
 *
 * PostHog: same project as app.flowcontents.com, so a visit here and a signup
 * there land on one person (the cookie is shared across *.flowcontents.com).
 * Requests go through /ingest (see next.config.mjs rewrites) so ad blockers
 * don't drop them. The key is the public ingestion key, safe in the bundle.
 *
 * LinkedIn Insight Tag: builds the website retargeting audience. It stays off
 * until NEXT_PUBLIC_LINKEDIN_PARTNER_ID is set in Vercel (the partner ID comes
 * from Campaign Manager > Analyze > Insight Tag).
 */
const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_A7thf46VqF4JQrQ5LdwGacuePCaMFNvbJ4hPgmTCv642"
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? ""

const POSTHOG_SNIPPET = `
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister identify alias set_config reset get_distinct_id getFeatureFlag isFeatureEnabled onFeatureFlags opt_in_capturing opt_out_capturing has_opted_out_capturing".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init(${JSON.stringify(POSTHOG_KEY)},{
  api_host:"/ingest",
  ui_host:"https://us.posthog.com",
  defaults:"2025-05-24",
  person_profiles:"always"
});
posthog.register({site:"marketing"});
`

const LINKEDIN_SNIPPET = `
_linkedin_partner_id=${JSON.stringify(LINKEDIN_PARTNER_ID)};
window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");
b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b,s);})(window.lintrk);
`

export function Tracking() {
  return (
    <>
      <Script id="posthog-init" strategy="afterInteractive">
        {POSTHOG_SNIPPET}
      </Script>
      {LINKEDIN_PARTNER_ID ? (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {LINKEDIN_SNIPPET}
        </Script>
      ) : null}
    </>
  )
}

type PostHogLike = {
  capture: (event: string, props?: Record<string, unknown>) => void
}

/**
 * Puts the email on the visitor once they hand one over. Deliberately NOT
 * identify(email): the app identifies by Firebase uid, and PostHog refuses to
 * merge two identified people, so the visitor stays anonymous here and the
 * app's identify(uid) folds this history into the real account later.
 */
export function trackLead(email: string, source: string) {
  if (typeof window === "undefined") return
  const ph = (window as unknown as { posthog?: PostHogLike }).posthog
  if (!ph) return
  ph.capture("website_lead_submitted", { source, $set: { email } })
}
