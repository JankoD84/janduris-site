import type { Metadata } from "next";

import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact — Janko Ďuriš",
  description: "Contact Janko Ďuriš about QA automation, release quality, product QA, internal tooling and practical QA audits.",
};

export default function Page() {
  return <ContactPage />;
}
