import { createFileRoute } from '@tanstack/react-router';
import { P, Title } from '@/style/typography';

import styled from 'styled-components';

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section>
    <div className="">
    <Title>Basic Sequence Analysis</Title>
    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, recusandae!</P>
    </div>   
      <InputBlock />
  </section>
}


const InputBlock = styled.div`
  width:300px;
  height:500px;
  border: 1px solid #000;
`