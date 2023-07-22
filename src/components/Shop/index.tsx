import React from 'react'
import styled from 'styled-components'
import { Text, Box } from 'src/elements'
import { Color } from 'src/utils'
import HubbleHeadDesktop from 'src/assets/HubbleHeadDesktop.png'
import Arrow from 'src/assets/Arrow.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1152px;
  height: 258px;
  margin: 0 auto 100px;
  padding: 0 48px;
  background: url(${HubbleHeadDesktop}) ${Color.purple} no-repeat center right;
  background-size: 688px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 355px;
`

const Shop = () => (
  <Wrapper>
    <TextWrapper>
      <Text variant="subtitle1" color={Color.purpleDark}>
        CONTACTS START AT JUST $1
      </Text>

      <Text variant="h4" color={Color.purpleDark}>
        Delivered right to your door! See, easy.
      </Text>

      <Box display="flex" margin="8px 0 0 0" gap="8px" cursor="pointer">
        <Text variant="subtitle2" color={Color.purpleDark}>
          Shop Contact Lenses
        </Text>

        <img src={Arrow} alt="arrow" />
      </Box>
    </TextWrapper>
  </Wrapper>
)

export { Shop }
