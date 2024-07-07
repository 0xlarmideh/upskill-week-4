import Contact from "@/components/views/Contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/contact")({
  component: () => <Contact />,
});
