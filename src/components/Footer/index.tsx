import React from 'react'
import styled from 'styled-components'
import { EmailForm, Text } from 'src/elements'
import { Color } from 'src/utils'
import Twitter from 'src/assets/Twitter.svg'
import Facebook from 'src/assets/Facebook.svg'
import Instagram from 'src/assets/Instagram.svg'
import { links } from './mocks'

const Wrapper = styled.div`
  padding: 64px 64px 50px;
  background: ${Color.dark};
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-column-gap: 2em;
  margin: 0 0 10px 0;
`

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  grid-column: col / span 5;
  grid-row: row;
`

const IconsWrapper = styled.div`
  display: flex;
  gap: 24px;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1.5px solid ${Color.white};
  cursor: pointer;
`

const LinksBlock = styled.div`
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 48px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: col 7 / span 6;
  grid-row: row;
  color: red;
`

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ChildrenLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

const Link = styled.a`
  font-family: PolySans, sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: ${Color.white};
`

const Footer = () => (
  <Wrapper>
    <ContentWrapper>
      <ContactBlock>
        <Text variant="h3" color={Color.white}>
          Stay in the know
        </Text>

        <EmailForm />

        <IconsWrapper>
          <Icon>
            <img src={Twitter} alt="Twitter" />
          </Icon>

          <Icon>
            <img src={Facebook} alt="Facebook" />
          </Icon>

          <Icon>
            <img src={Instagram} alt="Instagram" />
          </Icon>
        </IconsWrapper>
      </ContactBlock>

      <LinksBlock>
        {links.map(({ title, childrenLinks }, index) => (
          <LinkGroup>
            <Text key={index} variant="subtitle2" color={Color.white}>
              {title}
            </Text>

            <ChildrenLinks>
              {childrenLinks.map(({ title, link }, childrenIndex) => (
                <Link key={childrenIndex} href={link}>
                  {title}
                </Link>
              ))}
            </ChildrenLinks>
          </LinkGroup>
        ))}
      </LinksBlock>
    </ContentWrapper>

    <Text variant="small1" color={Color.white}>
      ©2022 Hubble – All Rights Reserved
    </Text>
  </Wrapper>
)

export { Footer }
