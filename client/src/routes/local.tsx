import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/local')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Local Pairwise Alignment</div>
}
