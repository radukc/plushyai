import { redirect } from "next/navigation";

// Redirect /docs to /docs/getting-started
export default function DocsPage() {
  redirect("/docs/getting-started");
}
