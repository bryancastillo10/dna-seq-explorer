import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/advanced')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Leveraging AI to perform DNA Analysis</div>
}
