import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const ArticleIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 0V2H0V0H18ZM12 6H18V4H12V6ZM12 10H18V8H12V10ZM12 14H18V12H12V14ZM0 18H18V16H0V18ZM10 4H0V14H10V4Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default ArticleIcon
