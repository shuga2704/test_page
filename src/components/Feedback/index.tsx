import React from 'react'
import styled from 'styled-components'
import { Text } from 'src/elements'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-column-gap: 2em;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 54px 0;
`

const Item: any = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 26px;
  grid-column: ${({ gridColumn }: any) => gridColumn};
  grid-row: row;
`

const Link = styled.a`
  font-family: 'PolySans', sans-serif;
  font-size: 24px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`

const Feedback = () => (
  <Wrapper>
    <Item gridColumn="col / span 4">
      <Text variant="h2">Phone</Text>

      <Link>1-844-334-1640</Link>

      <Text variant="body1" lineHeight="26px" align="center">
        Give us a call. Our customer service team is ready to help — 7 days a
        week from
        <br /> 9am-9pm Eastern Time.
      </Text>
    </Item>

    <Item gridColumn="col 5 / span 4">
      <Text variant="h2">Chat</Text>

      <Link>Open Chat</Link>

      <Text variant="body1" lineHeight="26px" align="center">
        Send us a message. Start a conversation with our online team.
      </Text>
    </Item>
    <Item gridColumn="col 9 / span 4">
      <Text variant="h2">Questions?</Text>

      <Link>Visit Our FAQs Page</Link>

      <Text variant="body1" lineHeight="26px" align="center">
        Find answers. We’ve taken your most pressing questions and queued up
        answers we know will help.
      </Text>
    </Item>
  </Wrapper>
)

export { Feedback }
