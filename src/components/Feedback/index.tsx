import React from 'react'
import styled from 'styled-components'
import { device } from 'src/utils'
import { Box } from 'src/elements'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-column-gap: 2em;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 54px 0;

  @media ${device.lg} {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 40px 20px 60px;
  }
`

const Item: any = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 26px;
  grid-column: ${({ gridColumn }: any) => gridColumn};
  grid-row: row;
`

const Feedback = () => (
  <Wrapper>
    <Item gridColumn="col / span 4">
      <h2>Phone</h2>

      <a className="feedback">1-844-334-1640</a>

      <Box textAlign="center">
        <span>
          Give us a call. Our customer service team is ready to help — 7 days a
          week from
          <br /> 9am-9pm Eastern Time.
        </span>
      </Box>
    </Item>

    <Item gridColumn="col 5 / span 4">
      <h2>Chat</h2>

      <a className="feedback">Open Chat</a>

      <Box textAlign="center">
        <span>
          Send us a message. Start a conversation with our online team.
        </span>
      </Box>
    </Item>

    <Item gridColumn="col 9 / span 4">
      <h2>Questions?</h2>

      <a className="feedback">Visit Our FAQs Page</a>

      <Box textAlign="center">
        <span>
          Find answers. We’ve taken your most pressing questions and queued up
          answers we know will help.
        </span>
      </Box>
    </Item>
  </Wrapper>
)

export { Feedback }
