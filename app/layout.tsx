import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackRouter — Route Customer Feedback to the Right Slack Channels",
  description: "Analyzes feedback sentiment and topics, routes to appropriate Slack teams automatically. Built for customer success teams and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e3a87c86-cf03-4a9b-8be1-90d4e58a515f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
