import { permanentRedirect } from "next/navigation";

export default async function DonateRedirect() {
  permanentRedirect("https://emersonforcouncil.substack.com/");
}
