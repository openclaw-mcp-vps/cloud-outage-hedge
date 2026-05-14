import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Outage Hedge — Multi-Cloud Failover Automation",
  description: "Automatically switches DNS/traffic to backup cloud providers when your primary goes down. Keep your SaaS or e-commerce site online 24/7."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3c6698bc-b085-47fb-a234-ee5069ddda33"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
