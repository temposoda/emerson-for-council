import { permanentRedirect } from "next/navigation";

export default async function Lang({ params }) {
  permanentRedirect("/", "replace");
}
