import Homepage from "@/components/views/Homepage/Homepage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: () => <Homepage />,
});
