import React from 'react'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps extends CodeProps {}

const theme = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: 'none',
  },
}

const CodeBlock = ({
  node,
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) => {
  const match = /language-(\w+)/.exec(className || '')

  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, '')}
      style={theme}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export default CodeBlock
