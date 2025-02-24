import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Basic DNA/RNA/ or Protein Sequence Analysis</div>
}
