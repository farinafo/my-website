import { permanentRedirect } from "next/navigation";

export default function EnglishAboutRedirectPage() {
  permanentRedirect("/en");
}
