import React from 'react'
import { Color } from 'src/utils'
import styled from 'styled-components'
import Logo from 'src/assets/Logo.svg'
import { buttons, links } from './mocks'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

const LinksWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`

const Link = styled.a`
  font-family: 'PolySans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${Color.primary};
  text-decoration: none;
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`

const Button = styled.div`
  cursor: pointer;
  line-height: 0;
`

const TopMenu = () => (
  <Wrapper>
    <img src={Logo} alt="logo" />

    <LinksWrapper>
      {links.map(({ title, link }, index) => (
        <Link key={index} href={link}>
          {title}
        </Link>
      ))}
    </LinksWrapper>

    <ButtonsWrapper>
      {buttons.map(({ icon, onClick }, index) => (
        <Button key={index} onClick={onClick}>
          <img src={icon} alt="button" />
        </Button>
      ))}
    </ButtonsWrapper>
  </Wrapper>
)

export { TopMenu }
