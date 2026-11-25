import type { Metadata } from "next";

import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact — Ján Ďuriš",
  description: "Contact Ján Ďuriš about QA automation, release quality, product QA, internal tooling and practical QA audits.",
};

export default function Page() {
  return <ContactPage />;
}
