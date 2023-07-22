import React from 'react'
import { GlobalStyle } from 'src/utils'
import styled from 'styled-components'
import { TopMenu, ContactUs } from 'src/components'

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

        {/* <div className="grid">*/}
        {/*  <div className="grid__item grid__item_item1">four columns</div>*/}
        {/*  <div className="grid__item grid__item_item2">four columns</div>*/}
        {/*  <div className="grid__item grid__item_item3">four columns</div>*/}
        {/*  <div className="grid__item grid__item_item4">eight columns</div>*/}
        {/*  <div className="grid__item grid__item_item5">four columns</div>*/}
        {/* </div>*/}
      </Wrapper>
    </>
  )
}

export default App
