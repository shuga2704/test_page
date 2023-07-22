import React from 'react'
import { Color, device } from 'src/utils'
import { Box } from 'src/elements'
import styled from 'styled-components'
import Logo from 'src/assets/Logo.svg'
import { buttons, links } from './mocks'
import { useMediaQuery } from 'src/hooks'
import Burger from 'src/assets/Burger.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px 70px;

  @media ${device.lg} {
    padding: 12px 20px;
  }
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

const TopMenu = () => {
  const isMobile = useMediaQuery(device.lg)

  return (
    <Wrapper>
      <Box gap="16px">
        {isMobile && <img src={Burger} alt="menu" />}
        <img src={Logo} alt="logo" />
      </Box>

      {!isMobile && (
        <LinksWrapper>
          {links.map(({ title, link }, index) => (
            <Link key={index} href={link}>
              {title}
            </Link>
          ))}
        </LinksWrapper>
      )}

      <ButtonsWrapper>
        {buttons.map(({ icon, onClick }, index) => (
          <Button key={index} onClick={onClick}>
            <img src={icon} alt="button" />
          </Button>
        ))}
      </ButtonsWrapper>
    </Wrapper>
  )
}

export { TopMenu }
