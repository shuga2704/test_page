import React from 'react'
import { device } from 'src/utils'
import styled from 'styled-components'
import ContactUsBackgroundDesktop from 'src/assets/ContactUsBackgroundDesktop.png'
import ContactUsBackgroundMobile from 'src/assets/ContactUsBackgroundMobile.png'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 560px;
  background-image: url(${ContactUsBackgroundDesktop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;

  @media ${device.lg} {
    height: 400px;
  }

  @media ${device.xs} {
    background-image: url(${ContactUsBackgroundMobile});
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
  height: 280px;
  padding: 0 64px 42px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(63, 63, 63, 0.75)
  );

  @media ${device.lg} {
    height: 200px;
    padding: 40px 20px 0;
    row-gap: 16px;
  }
`

const ContactUs = () => (
  <Wrapper>
    <Content>
      <h1>Contact Us</h1>

      <h6>We're here to help</h6>
    </Content>
  </Wrapper>
)

export { ContactUs }
