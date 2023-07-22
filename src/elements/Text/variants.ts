import { Color } from 'src/utils'

export type TextVariant = 'h1' | 'h2' | 'body1'

export const textVariants: {
  [variant: string]: {
    fontFamily: string
    fontSize: string
    fontWeight: number
    lineHeight?: string
    color?: Color
    textTransform?: 'uppercase'
    letterSpacing?: string
  }
} = {
  h1: {
    fontFamily: 'PolySans, sans-serif',
    fontSize: '88px',
    fontWeight: 950,
  },
  h2: {
    fontFamily: 'PolySans, sans-serif',
    fontSize: '56px',
    fontWeight: 900,
  },
  body1: {
    fontFamily: 'NeueHaasUnicaW1G, sans-serif',
    fontSize: '18px',
    fontWeight: 400,
  },
}
