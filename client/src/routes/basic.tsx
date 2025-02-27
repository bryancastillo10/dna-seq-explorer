import { createFileRoute } from '@tanstack/react-router';
import { Paragraph, Title } from '@/style/globalStyles';

import styled from 'styled-components';

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section>
    <div className="">
    <Title>Basic Sequence Analysis</Title>
    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, recusandae!</Paragraph>
    </div>   
      <InputBlock />
  </section>
}


const InputBlock = styled.div`
  width:300px;
  height:500px;
  border: 1px solid #000;
`