import { permanentRedirect } from "next/navigation";

export default async function DonateRedirect() {
  permanentRedirect("https://secure.actblue.com/donate/emersonforcouncil");
}
