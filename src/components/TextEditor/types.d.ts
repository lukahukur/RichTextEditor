import { RefObject } from 'react'

type sizes = {
  w: number
  h: number
}

export type TextEditor = {
  sizes: sizes
  enableResize?: boolean
}
