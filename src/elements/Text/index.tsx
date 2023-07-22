import React from 'react'
import { Color } from 'src/utils'
import styled from 'styled-components'

import { TextVariant, textVariants } from './variants'

const TextContainer: any = styled.span.attrs<Props>(
  ({ textOverflow, textTransform, color, align, display, whiteSpace }) => ({
    style: {
      display,
      textAlign: align,
      textOverflow,
      textTransform,
      color,
      whiteSpace,
    },
  }),
)`
  ${Object.keys(textVariants).map(
    variant => `
    &[data-variant='${variant}'] {
      font-family: ${textVariants[variant].fontFamily};
      font-size: ${textVariants[variant].fontSize};
      font-weight: ${textVariants[variant].fontWeight};
      line-height: ${textVariants[variant].lineHeight};
      color: ${textVariants[variant].color || Color.primary};
      text-transform: ${textVariants[variant].textTransform || 'none'};
      letter-spacing: ${textVariants[variant].letterSpacing || 'normal'};
    }
  `,
  )}
`

interface Props {
  readonly variant?: TextVariant
  readonly display?: 'block' | 'inline' | 'grid' | 'flex'
  readonly align?: 'left' | 'center' | 'right'
  readonly color?: Color | string
  readonly textOverflow?: string
  readonly textTransform?:
    | 'capitalize'
    | 'lowercase'
    | 'uppercase'
    | 'none'
    | 'inherit'
  readonly whiteSpace?: 'nowrap' | 'normal'
  readonly children: React.ReactNode
}

const Text: React.FC<Props> = ({
  variant = 'body1',
  align,
  color,
  display = 'inline',
  textOverflow,
  textTransform,
  whiteSpace,
  children,
}) => (
  <TextContainer
    data-variant={variant}
    display={display}
    color={color}
    align={align}
    textOverflow={textOverflow}
    textTransform={textTransform}
    whiteSpace={whiteSpace}
  >
    {children}
  </TextContainer>
)

export { Text }
export type { TextVariant }
