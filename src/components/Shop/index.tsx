import React from 'react'
import styled from 'styled-components'
import { Box } from 'src/elements'
import { Color, device } from 'src/utils'
import HubbleHeadDesktop from 'src/assets/HubbleHeadDesktop.png'
import HubbleHeadMobile from 'src/assets/HubbleHeadMobile.png'
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

  @media ${device.lg} {
    display: block;
    width: auto;
    margin: 0 20px 60px;
    padding: 32px 20px 0;
    height: 354px;
    background: url(${HubbleHeadMobile}) ${Color.purple} no-repeat bottom center;
    background-size: 280px auto;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 355px;

  @media ${device.lg} {
    width: 100%;
  }
`

const Shop = () => (
  <Wrapper>
    <TextWrapper>
      <span className="small1">CONTACTS START AT JUST $1</span>

      <h4>Delivered right to your door! See, easy.</h4>

      <Box display="flex" margin="8px 0 0 0" gap="8px" cursor="pointer">
        <h5 style={{ color: Color.purpleDark }}>Shop Contact Lenses</h5>

        <img src={Arrow} alt="arrow" />
      </Box>
    </TextWrapper>
  </Wrapper>
)

export { Shop }
