import { Color } from 'src/utils'

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body1'
  | 'small1'
  | 'subtitle1'
  | 'subtitle2'

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
  h3: {
    fontFamily: 'PolySans, sans-serif',
    fontSize: '30px',
    lineHeight: '42px',
    fontWeight: 400,
  },
  h4: {
    fontFamily: 'PolySans, sans-serif',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 400,
  },
  body1: {
    fontFamily: 'NeueHaasUnicaW1G, sans-serif',
    fontSize: '18px',
    fontWeight: 400,
  },
  small1: {
    fontFamily: 'NeueHaasUnicaW1G, sans-serif',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 400,
  },
  subtitle1: {
    fontFamily: 'NeueHaasUnicaW1G, sans-serif',
    fontSize: '11px',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  subtitle2: {
    fontFamily: 'PolySans, sans-serif',
    fontSize: '14px',
    fontWeight: 900,
    letterSpacing: '3%',
  },
}
