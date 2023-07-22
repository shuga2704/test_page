import React, { useState } from 'react'
import styled from 'styled-components'
import { Color, device } from 'src/utils'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  background: ${Color.white};

  @media ${device.lg} {
    padding: 4px;
  }
`

const Input = styled.input`
  margin: 0 16px 0 8px;
  flex: 1;
  border: none;
`

const Button = styled.button`
  height: 40px;
  padding: 0 33px;
  line-height: 40px;
  background: ${Color.primary};
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  @media ${device.lg} {
    padding: 0 14px;
  }
`

const EmailForm = () => {
  const [value, setValue] = useState('')

  const handleClick = () => {
    console.log(value)
  }

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder="Enter Email Address"
      />

      <Button onClick={handleClick}>Submit</Button>
    </Wrapper>
  )
}

export { EmailForm }
