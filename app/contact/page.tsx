import ContactPage from "./ContactPage";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("/contact", "Contact — Ján Ďuriš", "Contact Ján Ďuriš about QA automation, release quality, product QA, internal tooling and practical QA audits.");

export default function Page() {
  return <ContactPage />;
}
