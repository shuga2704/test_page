import React from 'react'
import { Color } from 'src/utils'
import styled from 'styled-components'
import { Text } from 'src/elements'
import ContactUsBackground from 'src/assets/ContactUsBackground.png'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 560px;
  background-image: url(${ContactUsBackground});
  background-size: cover;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
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
`

const ContactUs = () => (
  <Wrapper>
    <Content>
      <Text variant="h1" color={Color.white}>
        Contact Us
      </Text>

      <Text variant="body1" color={Color.white}>
        We're here to help
      </Text>
    </Content>
  </Wrapper>
)

export { ContactUs }
