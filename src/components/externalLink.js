import React from 'react'

const externalLink = ({children, ...props}) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

export default externalLink
