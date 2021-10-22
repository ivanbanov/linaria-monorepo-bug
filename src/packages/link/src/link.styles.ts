import { styled } from '@linaria/react'

import { LinkProps, LinkVariants, VARIANTS } from './link.config'

const variants = {
  [VARIANTS.primary]: {
    color: 'colors.blue700.variable',
    borderColor: 'colors.blue400.variable',
    hoverColor: 'colors.blue800.variable',
    activeColor: 'colors.blue900.variable',
  },
  [VARIANTS.secondary]: {
    color: 'colors.indigo600.variable',
    borderColor: 'colors.indigo200.variable',
    hoverColor: 'colors.indigo600.variable',
    activeColor: 'colors.indigo600.variable',
  },
}

export const StyledLink = styled.a<LinkProps & { variant: LinkVariants }>`
  text-decoration: none;
  border: 0;
  border-bottom: 1px solid currentColor;
  cursor: pointer;
  transition: border 250ms, color 250ms;
  color: ${({ variant }) => variants[variant].color};
  border-color: ${({ variant }) => variants[variant].borderColor};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  border-style: ${({ dashed }) => (dashed ? 'dashed' : 'solid')};

  &:hover,
  &:focus-visible {
    border-color: currentColor;
    color: ${({ variant }) => variants[variant].hoverColor};
  }

  &:active {
    border-color: currentColor;
    color: ${({ variant }) => variants[variant].activeColor};
  }
`
