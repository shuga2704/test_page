import { createGlobalStyle } from 'styled-components'
import { device } from './device'
import { Color } from './colors'

import NeueHaasUnicaW1GHeavyWoff from '../fonts/NeueHaasUnicaW1GHeavy.woff'
import NeueHaasUnicaW1GHeavyWoff2 from '../fonts/NeueHaasUnicaW1GHeavy.woff2'

import NeueHaasUnicaW1GWoff from '../fonts/NeueHaasUnicaW1G.woff'
import NeueHaasUnicaW1GWoff2 from '../fonts/NeueHaasUnicaW1G.woff2'

import PolySansNeutralWoff from '../fonts/PolySansNeutral.woff'
import PolySansNeutralWoff2 from '../fonts/PolySansNeutral.woff2'

import PolySansMedianWoff from '../fonts/PolySansMedian.woff'
import PolySansMedianWoff2 from '../fonts/PolySansMedian.woff2'

import PolySansBulkyWoff from '../fonts/PolySansBulky.woff'
import PolySansBulkyWoff2 from '../fonts/PolySansBulky.woff2'

import PolySansBulkyWideWoff from '../fonts/PolySansBulkyWide.woff'
import PolySansBulkyWideWoff2 from '../fonts/PolySansBulkyWide.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NeueHaasUnicaW1G';
    src: local('NeueHaasUnicaW1G'), local('NeueHaasUnicaW1G'),
    url(${NeueHaasUnicaW1GWoff2}) format('woff2'),
    url(${NeueHaasUnicaW1GWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'NeueHaasUnicaW1G';
    src: local('NeueHaasUnicaW1G'), local('NeueHaasUnicaW1G'),
    url(${NeueHaasUnicaW1GHeavyWoff2}) format('woff2'),
    url(${NeueHaasUnicaW1GHeavyWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'PolySans';
    src: local('PolySans'), local('PolySans'),
    url(${PolySansNeutralWoff2}) format('woff2'),
    url(${PolySansNeutralWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'PolySans';
    src: local('PolySans'), local('PolySans'),
    url(${PolySansMedianWoff2}) format('woff2'),
    url(${PolySansMedianWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }  
  
  @font-face {
    font-family: 'PolySans';
    src: local('PolySans'), local('PolySans'),
    url(${PolySansBulkyWoff2}) format('woff2'),
    url(${PolySansBulkyWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
  }  
  
  @font-face {
    font-family: 'PolySans';
    src: local('PolySans'), local('PolySans'),
    url(${PolySansBulkyWideWoff2}) format('woff2'),
    url(${PolySansBulkyWideWoff}) format('woff');
    font-weight: 950;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    background: #fff;
    font-family: 'NeueHaasUnicaW1G', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${Color.primary};
  }
  
  input {
    font-family: 'NeueHaasUnicaW1G', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${Color.primary};
    outline: none;
  }

  input::placeholder {
    color: #999999;
  }
  
  button {
    outline: none;
    border: none;
    font-family: 'PolySans', sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 1px;
    color: ${Color.white}
  }
  
  h1 {
    font-family: 'PolySans', sans-serif;
    font-size: 88px;
    line-height: 100px;
    font-weight: 950;
    color: ${Color.white};

    @media ${device.lg} {
      font-size: 36px;
      line-height: 46px;
    }
  }
  
  h2 {
    font-family: 'PolySans', sans-serif;
    font-size: 56px;
    line-height: 68px;
    font-weight: 900;
    color: ${Color.primary};

    @media ${device.lg} {
      font-size: 32px;
      line-height: 42px;
    }
  }

  h3 {
    font-family: 'PolySans', sans-serif;
    font-size: 30px;
    line-height: 42px;
    font-weight: 400;
    color: ${Color.white};

    @media ${device.lg} {
      font-size: 24px;
      line-height: 34px;
      letter-spacing: 1px;
    }
  }
  
  h4 {
    width: 100%;
    font-family: 'PolySans', sans-serif;
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
    color: ${Color.purpleDark};
    word-break:break-word;
    overflow-wrap: break-word;
    line-break: strict;

    @media ${device.lg} {
      font-size: 20px;
      line-height: 30px;
    }
  }
  
  h5 {
    font-family: 'PolySans', sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 1px;
    color: ${Color.white}
  }

  h6 {
    font-family: 'NeueHaasUnicaW1G', sans-serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: ${Color.white}; 
  }
  
  span {
    font-family: 'NeueHaasUnicaW1G', sans-serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: ${Color.primary};

    @media ${device.lg} {
      font-size: 14px;
      line-height: 18px;
    }
  }
  
  span.small1 {
    font-size: 11px;
    line-height: 16px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${Color.purpleDark};
  }
  
  span.small2 {
    font-size: 12px;
    line-height: 18px;
    color: ${Color.white};
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  a.feedback {
    font-family: 'PolySans', sans-serif;
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
    color: ${Color.primary};
    text-decoration: underline;
    cursor: pointer;

    @media ${device.lg} {
      font-size: 20px;
      line-height: 30px;
    }
  }
  
  a.feedback:hover {
    text-decoration: none;
  }
`
