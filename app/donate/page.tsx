import { permanentRedirect } from "next/navigation";

// https://dpo.org/oregon-political-tax-credit/
export default async function DonateRedirect() {
  permanentRedirect("https://secure.actblue.com/donate/emersonforcouncil");
}
