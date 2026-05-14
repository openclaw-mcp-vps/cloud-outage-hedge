export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Infrastructure Reliability
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Multi-Cloud Failover,{" "}
          <span className="text-[#58a6ff]">Fully Automated</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Cloud Outage Hedge monitors your cloud providers in real time and instantly switches DNS via Cloudflare when your primary goes down — zero manual intervention required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $99/month
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">&#10003;</span> Automatic DNS switching</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">&#10003;</span> Configurable thresholds</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">&#10003;</span> One-click rollback</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">&#10003;</span> Webhook alerts</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$99</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per workspace</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">&#10003;</span> Monitor up to 10 cloud endpoints</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">&#10003;</span> Cloudflare DNS auto-switching</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">&#10003;</span> Real-time failover dashboard</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">&#10003;</span> Webhook & email alerts</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">&#10003;</span> Configurable health thresholds</li>
            <li className="flex items-start gap-2"><span className="text-[#3fb950] mt-0.5">&#10003;</span> One-click rollback</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How fast does failover happen?</h3>
            <p className="text-[#8b949e] text-sm">Health checks run every 30 seconds. Once a failure threshold is crossed, DNS records are updated via the Cloudflare API within seconds — typical end-to-end failover is under 2 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which cloud providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">Any provider with an HTTP health endpoint — AWS, GCP, Azure, DigitalOcean, Hetzner, and more. DNS switching is handled through Cloudflare, so your domain just needs to be on Cloudflare.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I roll back after a failover?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The dashboard shows a full failover history and lets you restore the original DNS configuration with a single click once your primary provider recovers.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pt-8 border-t border-[#21262d]">
        &copy; {new Date().getFullYear()} Cloud Outage Hedge. All rights reserved.
      </footer>
    </main>
  );
}
