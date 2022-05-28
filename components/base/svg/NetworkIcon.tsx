import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const NetworkIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 14V20H0V14C0 12.3 1.3 11 3 11H6C7.7 11 9 12.3 9 14ZM14.5 11C16.4 11 18 9.4 18 7.5C18 5.6 16.4 4 14.5 4C12.6 4 11 5.6 11 7.5C11 9.4 12.6 11 14.5 11ZM15.5 13H13.5C12.1 13 11 14.1 11 15.5V20H18V15.5C18 14.1 16.9 13 15.5 13ZM4.5 0C2 0 0 2 0 4.5C0 7 2 9 4.5 9C7 9 9 7 9 4.5C9 2 7 0 4.5 0Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default NetworkIcon