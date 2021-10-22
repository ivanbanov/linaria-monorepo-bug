import { AnchorHTMLAttributes, ReactNode } from 'react'

const variants = ['primary', 'secondary'] as const

export type LinkVariants = typeof variants[number]

export const VARIANTS = variants.reduce(
  (acc, key) => ({
    ...acc,
    [key]: key,
  }),
  {} as { [K in LinkVariants]: K },
)

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   The content
  */
  children: ReactNode
  /**
   Change the link styles
  */
  variant?: LinkVariants
  /**
   Disable the mouse events
  */
  disabled?: boolean
  /**
   Set the underline to dashed mode
  */
  dashed?: boolean
}
