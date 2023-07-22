import React from 'react'
import { GlobalStyle } from 'src/utils'
import styled from 'styled-components'
import { TopMenu, ContactUs, Feedback, Shop, Footer } from 'src/components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
`

function App() {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <TopMenu />
        <ContactUs />
        <Feedback />
        <Shop />
        <Footer />
      </Wrapper>
    </>
  )
}

export default App
