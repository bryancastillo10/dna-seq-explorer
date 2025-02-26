import { createFileRoute } from '@tanstack/react-router';
import { Flex, Title } from '@/style/globalStyles';


export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Flex>
    <Title>Basic Sequence Analysis</Title>
   
  </Flex>
}
