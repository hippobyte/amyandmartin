import React from 'react'
import { Link } from 'gatsby'

const Anchor = (props) => {
  const { 
    a11yTitle, alignSelf, color, disabled, gridArea, href, icon, label, margin, reverse, size, 
    onClick, onBlur, onFocus, className, 'aria-label': ariaLabel, to, path,
    children, ...rest
  } = props

  return (
    <Link
      to={to || path}
      aria-label={ariaLabel}
      className={className}
      disabled={disabled}
      href={href}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      {...rest}
    >
      {children || label}
    </Link>
  )
}

export default Anchor