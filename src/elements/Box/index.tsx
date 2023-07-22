import React from 'react'
import styled from 'styled-components'

interface Props {
  readonly display?: 'block' | 'inline' | 'grid' | 'flex' | 'none'
  readonly visibility?: 'visible' | 'hidden'
  readonly direction?: 'row' | 'column'
  readonly width?: string
  readonly maxWidth?: string
  readonly minWidth?: string
  readonly height?: string
  readonly minHeight?: string
  readonly maxHeight?: string
  readonly margin?: string
  readonly padding?: string
  readonly gap?: string
  readonly background?: string
  readonly justify?:
    | 'normal'
    | 'center'
    | 'left'
    | 'right'
    | 'baseline'
    | 'space-evenly'
    | 'space-between'
    | 'space-around'
    | 'stretch'
  readonly align?:
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch'
  readonly border?: string
  readonly borderRadius?: string
  readonly borderWidth?: string
  readonly wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  readonly flexGrow?: number
  readonly flexShrink?: number
  readonly overflow?: 'auto' | 'visible' | 'hidden' | 'scroll'
  readonly cursor?: 'inherit' | 'auto' | 'pointer' | 'default'
  readonly position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  readonly top?: string | number
  readonly right?: string | number
  readonly bottom?: string | number
  readonly left?: string | number
  readonly textAlign?: 'start' | 'end' | 'left' | 'right' | 'center'
  readonly opacity?: number
  readonly onClick?: React.MouseEventHandler<HTMLDivElement>
  readonly gridColumn?: string
  readonly gridRow?: string
  readonly gridColumns?: string
  readonly whiteSpace?: string
  readonly pointerEvents?: 'auto' | 'none'
  readonly rotate?: number
  readonly userSelect?: 'all' | 'auto' | 'none' | 'text'
  readonly boxShadow?: string
  readonly wordBreak?: 'normal' | 'break-all' | 'break-word' | 'keep-all'
}

export const Box = styled.div<Props>`
  display: ${({ display = 'flex' }) => display};
  visibility: ${({ visibility }) => visibility};
  flex-direction: ${({ direction = 'row' }) => direction};
  width: ${({ width = 'auto' }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height = 'auto' }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  margin: ${({ margin = 0 }) => margin};
  padding: ${({ padding = 0 }) => padding};
  gap: ${({ gap = 0 }) => gap};
  background: ${({ background = 'none' }) => background};
  justify-content: ${({ justify = 'normal' }) => justify};
  align-items: ${({ align = 'normal' }) => align};
  border: ${({ border = 'none' }) => border};
  border-radius: ${({ borderRadius = 'none' }) => borderRadius};
  border-width: ${({ borderWidth }) => borderWidth};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  flex-grow: ${({ flexGrow = 0 }) => flexGrow};
  flex-shrink: ${({ flexShrink = 1 }) => flexShrink};
  overflow: ${({ overflow = 'visible' }) => overflow};
  cursor: ${({ cursor = 'inherit' }) => cursor};
  position: ${({ position = 'static' }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  text-align: ${({ textAlign = 'start' }) => textAlign};
  opacity: ${({ opacity = 1 }) => opacity};
  grid-column: ${({ gridColumn = 'auto' }) => gridColumn};
  grid-row: ${({ gridRow = 'auto' }) => gridRow};
  grid-template-columns: ${({ gridColumns }) => gridColumns};
  white-space: ${({ whiteSpace }) => whiteSpace};
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  transform: ${({ rotate }) => rotate && `rotate(${rotate}deg)`};
  user-select: ${({ userSelect }) => userSelect};
  box-shadow: ${({ boxShadow }) => boxShadow};
  word-break: ${({ wordBreak }) => wordBreak};
`
