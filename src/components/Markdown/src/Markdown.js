
import React from 'react'
import { Markdown, Paragraph } from 'grommet'

const MarkdownContent = ({ children }) => (
  <Markdown
    components={components}
  >
    {children}
  </Markdown>
)

const components = ({
  p: {
    component: Paragraph,
    props: {
      "fill": true
    }
  }
})

export default MarkdownContent