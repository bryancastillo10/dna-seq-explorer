import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/global')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Global Pairwise Alignment</div>
}
