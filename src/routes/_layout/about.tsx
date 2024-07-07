import About from "@/components/views/About";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: () => <About />,
});
