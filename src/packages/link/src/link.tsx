import React from 'react'

import { LinkProps } from './link.config'
import { StyledLink } from './link.styles'

export const Link: React.FC<LinkProps> = ({
  variant = 'primary',
  disabled = false,
  dashed = false,
  rel = '',
  target,
  ...props
}) => (
  <StyledLink
    rel={target === '_blank' ? `noopener noreferrer ${rel}` : rel}
    variant={variant}
    disabled={disabled}
    dashed={dashed}
    target={target}
    {...props}
  />
)
