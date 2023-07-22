import { createGlobalStyle } from 'styled-components'
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
  }

  body {
    margin: 0;
    background: #fff;
    font-family: 'NeueHaasUnicaW1G', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${Color.primary};
  }


  .grid__item {
    background: #eee;
    text-transform: uppercase;
    padding: 1em;
    font-size: 14px;
  }

  .grid__item_item1 {
    grid-column: col / span 4;
    grid-row: row;
  }

  .grid__item_item2 {
    grid-column: col 5 / span 4;
    grid-row: row;
  }

  .grid__item_item3 {
    grid-column: col 9 / span 4;
    grid-row: row;
  }

  .grid__item_item4 {
    grid-column: col / span 8;
    grid-row: row 2;
  }

  .grid__item_item5 {
    grid-column: col 9 / span 4;
    grid-row: row 2;
  }
`
