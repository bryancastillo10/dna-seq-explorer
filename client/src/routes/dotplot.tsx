import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dotplot')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="">Dot Plot Sequence Alignment</div>
}
